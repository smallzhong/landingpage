import type { Tweet } from "react-tweet/api";
import {
  type TwitterComponents,
  TweetInReplyTo,
  TweetBody,
  TweetMedia,
  TweetInfo,
  QuotedTweet,
  enrichTweet
} from "react-tweet";

type Props = {
  tweet: Tweet
  components?: TwitterComponents
}

export const TweetBase = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t);
  return (
    <div className={"tweet"}>
      {/*<TweetContainer>*/}
      {/*<TweetHeader tweet={tweet} components={components} />*/}
      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
      <TweetBody tweet={tweet} />
      {tweet.mediaDetails?.length ? (
        <TweetMedia tweet={tweet} components={components} />
      ) : null}
      {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
      <div className={"tweet-info"}>
        <TweetInfo tweet={tweet} />
      </div>
      {/*<TweetActions tweet={tweet} />*/}
      {/*</TweetContainer>*/}
    </div>
  );
};