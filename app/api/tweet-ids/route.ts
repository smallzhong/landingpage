import { NextRequest, NextResponse } from "next/server";
import { D1Database } from "@cloudflare/workers-types";

export const runtime = "edge";
// export const dynamic = "force-dynamic";

const update_interval = "1 hour";

const needUpdate = async (db: D1Database, user: string) => {
  const { meta: { changes } } = await db.prepare(`INSERT INTO KV(key, value)
                                                  VALUES ('last_update_${user}', DATETIME('now'))
                                                  ON CONFLICT DO NOTHING`).run();
  if (changes > 0) {
    return true;
  }
  const { meta: { changes: updated } } = await db.prepare(`UPDATE kv
                                                           SET value = DATETIME('now')
                                                           WHERE key = 'last_update_${user}'
                                                             AND value < DATETIME('now', '-${update_interval}')`).run();
  return (updated > 0);
};

const authUser = async (db: D1Database, user: string): Promise<string> => {
  let token: string;
  const {
    access_token,
    refresh_token: refresh_token_,
    expires_at
  } = await db.prepare("SELECT access_token, refresh_token, expires_at FROM auth WHERE name = ?").bind(user).first();
  let current_timestamp = Math.floor(Date.now() / 1000);
  if ((expires_at as number) < current_timestamp - 60) {
    const basicAuth = btoa(`${process.env.TWITTER_CLIENT_ID}:${process.env.TWITTER_CLIENT_SECRET}`);
    const resp = await fetch("https://api.twitter.com/2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Authorization": `Basic ${basicAuth}`
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token_ as string
      }),
      cache: "no-cache"
    });
    const { access_token, refresh_token, expires_in } = await resp.json();
    let current_timestamp = Math.floor(Date.now() / 1000);
    const stmt = db.prepare("UPDATE auth SET access_token = ?, refresh_token = ?, expires_at = ? WHERE name = ?")
      .bind(access_token, refresh_token, current_timestamp + expires_in, user);
    await stmt.run();
    token = access_token;
  } else {
    token = access_token as string;
  }
  return token;
};

const updateLatestTweet = async (db: D1Database, user: string) => {
  const token = await authUser(db, user);

  const resp = await fetch("https://api.twitter.com/2/users/me?user.fields=most_recent_tweet_id", {
    headers: {
      "Authorization": `Bearer ${token}`
    },
    cache: "no-cache"
  });
  const { data: { most_recent_tweet_id } } = await resp.json();
  await db.prepare("INSERT INTO timeline (user, inserted_at, tweet_id) VALUES (?, DATETIME('now'), ?) ON CONFLICT DO NOTHING").bind(user, most_recent_tweet_id).run();
};

export async function GET(req: NextRequest) {
  const user = req.nextUrl.searchParams.get("user");
  const count = req.nextUrl.searchParams.get("count") || 10;
  const db = process.env.DB_TWEET;
  if (await needUpdate(db, user)) {
    await updateLatestTweet(db, user);
  }
  const { results } = await db.prepare(`SELECT tweet_id
                                        FROM timeline
                                        WHERE user = ?
                                        ORDER BY inserted_at DESC
                                        LIMIT ?`).bind(user, count).all();
  const tweets = results.map(({ tweet_id }) => tweet_id);
  return NextResponse.json(tweets);
}