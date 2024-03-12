import { useEffect, useState } from "react";
import {getUserCommentsService } from "../service/getUserCommentsService";
import { getAllCommentsService} from "../service/getAllComments";

const useTweets = (id) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTweets = async () => {
      try {
        setLoading(true);
        const data = id
          ? await getUserCommentsService(id)
          : await getAllCommentsService();

        setTweets(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTweets();
  }, [id]);

  const addTweet = (data) => {
    setTweets([data, ...tweets]);
  };

  const removeTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };

  return { tweets, error, loading, addTweet, removeTweet };
};

export default useTweets;
