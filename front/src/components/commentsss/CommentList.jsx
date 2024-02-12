import { Comment } from "./Comment";

export const CommentList = ({ comments, removeComment }) => {
  return comments.length ? (
    <ul className="comment-list">
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <Comment comment={comment} removeComment={removeComment} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no Comments...</p>
  );
};