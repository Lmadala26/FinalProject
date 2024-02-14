import useTweets from "../../hooks/useTweets";
import { TweetList } from "../../components/getComments/TweetList";
// import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../../components/getComments/Loading";


export const GetComments = () => {
    const { tweets, loading, removeTweet } = useTweets();
  
    if (loading) return <Loading />;

  
    return (
        <TweetList tweets={tweets} removeTweet={removeTweet} />
    );
  };