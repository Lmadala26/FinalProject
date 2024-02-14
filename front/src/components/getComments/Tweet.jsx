import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteTweetService } from "../../service/deleteTweetService";
import { AuthContext } from "../../context/AuthContext";

export const Tweet = ({ tweet, removeTweet }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteTweet = async (id) => {
    try {
      await deleteTweetService({ id, token });

      if (removeTweet) {
        removeTweet(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article className="tweet">
      <p>{tweet.description}</p>
      {tweet.image ? (
        <img
          src={`http://localhost:3000/uploads/${tweet.image}`}
          alt={tweet.text}
        />
      ) : null}
      <p>
        By <Link to={`/users/${tweet.id}`}>{tweet.email}</Link> on{" "}
        <Link to={`/comment/${tweet.userId}`}>
          {new Date(tweet.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === tweet.userId ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("Are you sure?")) deleteTweet(tweet.userId);
            }}
          >
            Delete tweet
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
