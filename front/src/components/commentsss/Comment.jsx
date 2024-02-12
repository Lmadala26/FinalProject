import { useEffect, useState } from "react";
import { getAllCommentService, getUserCommentService } from "../../service/useComment";
const Comment = (id) => {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadcomment = async () => {
      try {
        setLoading(true);
        const data = id
          ? await getUserCommentService(id)
          : await getAllCommentService();

        setComment(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadcomment();
  }, [id]);

  const addComment = (data) => {
    setcomment([data, ...comment]);
  };

  const removeComment = (id) => {
    setComment(comment.filter((tweet) => tweet.id !== id));
  };

  return { comment, error, loading, addComment, removeComment };
};

export default Comment;