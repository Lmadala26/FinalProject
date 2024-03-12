import useTweets from "../../hooks/useComments";
import { CommentList } from "./CommentList";
// import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../../components/getComments/Loading";


export const GetComments = () => {
    const { tweets, loading, removeTweet } = useTweets();
  
    if (loading) return <Loading />;

  
    return (
        <CommentList tweets={tweets} removeTweet={removeTweet} />
    );
  };