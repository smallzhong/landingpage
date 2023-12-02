import { headers } from "next/headers";
import React, { Fragment } from "react";
import { Tweet } from "./Tweet";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export const Timeline = async ({ id }: { id: string }) => {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  try {
    const tweetIds: string[] = await (await fetch(`${protocol}://${host}/api/tweet-ids?user=${id}`, { next: { revalidate: 1800 } })).json();
    return (
      <div className="flex flex-col space-y-6">
        {tweetIds.map((tweetId, i) => (
          <Fragment key={tweetId}>
            <Tweet id={tweetId} fallback={<p>Loading...</p>} />
            {i < tweetIds.length - 1 && <hr className="border-ctp-overlay0" />}
          </Fragment>
        ))}
      </div>
    );
  } catch (e) {
    return (
      <p className="text-ctp-red">! Failed to load timeline</p>
    );
  }
};