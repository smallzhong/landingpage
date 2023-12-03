import { Suspense } from "react";
import { getTweet } from "react-tweet/api";
import { type TweetProps, TweetSkeleton } from "react-tweet";
import { TweetBase } from "./TweetBase";

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
      if (onError) {
        onError(err);
      } else {
        console.error(err);
      }
    })
    : undefined;

  if (!tweet) {
    return <p className="text-error">Tweet not found</p>;
  }

  return <TweetBase tweet={tweet} components={components} />;
};

export const Tweet = ({
                        fallback = <TweetSkeleton />,
                        ...props
                      }: TweetProps) => (
  <Suspense fallback={fallback}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <TweetContent {...props} />
  </Suspense>
);