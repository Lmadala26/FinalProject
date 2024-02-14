import { Tweet } from "./Tweet";

export const TweetList = ({ tweets}) => {
  return tweets.length ? (
    <ul className="tweet-list">
{tweets.map((tweet) => (
  <div key={tweet.id}>
    <h2>{tweet.title}</h2>
    <p>Topic: {tweet.topic}</p>
    <p>Comentario: {tweet.description}</p>
    <p>Posted: {new Date(tweet.createdAt).toLocaleString()}</p>
  </div>
))}

    </ul>
  ) : (
    <p>There are no tweets...</p>
  );
};
