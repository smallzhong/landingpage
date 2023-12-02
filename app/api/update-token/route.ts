import { Session } from "next-auth";
import { auth } from "../../../auth";
import { allowedUsers } from "../../../timeline_config";

export const runtime = "edge";


const insertToken = async (session: Session) => {
  const DB = process.env.DB_TWEET;
  const stmt = DB.prepare("INSERT OR REPLACE INTO auth (name, access_token, refresh_token, expires_at) VALUES (?, ?, ?, ?)")
    // @ts-ignore
    .bind(session.account.id, session.account.access_token, session.account.refresh_token, session.account.expires_at);
  await stmt.run();
};

export const POST = auth(async (req) => {
  const session = req.auth;

  // @ts-ignore
  if (!allowedUsers.includes(session.account.id)) {
    return;
  }
  await insertToken(session);
  return new Response("ok");
});