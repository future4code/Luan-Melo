import { useState } from "react";
import { doCreatePost } from "../../services/RequestApi";

const FeedPost = () => {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState("");

  const sendComments = async () => {
    setLoading(true);
    await doCreatePost({ token, title, body: comments }).then(() => {
      window.location.reload();
    });
    setLoading(false);
  };

  return (
    <div>
      <h1>Comments</h1>
      <input
        placeholder="Title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        min={8}
      />
      <input
        placeholder="Comment"
        type="text"
        onChange={(e) => setComments(e.target.value)}
        min={8}
      />
      <button onClick={sendComments} disabled={loading}>
        Post
      </button>
    </div>
  );
};

export default FeedPost;
