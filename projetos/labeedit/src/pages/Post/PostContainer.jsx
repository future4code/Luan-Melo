import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import {
  doCreateComments,
  doCreateCommentVote,
  doGetDetailsComments,
  doRemoveCommentPost,
} from "../../services/RequestApi";

const Post = () => {
  const { goBack } = useHistory();
  let { id } = useParams();

  const token = localStorage.getItem("token");
  const [postDetails, setPostDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState("");

  useEffect(() => {
    async function fetchList() {
      setLoading(true);
      const response = await doGetDetailsComments({ id, token });
      setPostDetails(response);
      setLoading(false);
    }
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendComments = async () => {
    setLoading(true);
    await doCreateComments({ id, token, body: comments }).then(() => {
      window.location.reload();
    });
    setLoading(false);
  };

  const handleCommentVote = async (id, voteType) => {
    const obj = voteType ? { direction: 1 } : { direction: -1 };
    await doCreateCommentVote({
      id,
      token,
      obj,
    }).then(() => {
      window.location.reload();
    });
  };

  const handleDeleteComment = async (id) => {
    await doRemoveCommentPost({ id, token }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      {postDetails?.map((post) => {
        const { body, username, userVote, createAt, id } = post;
        console.log(post);
        return (
          <div key={id}>
            <h3>{username}</h3>
            <p>{body}</p>
            <p>{createAt}</p>
            <p>{userVote}</p>
            <button onClick={() => handleCommentVote(id, true)}>Mais</button>
            <button onClick={() => handleCommentVote(id, false)}>Menos</button>
            <button onClick={() => handleDeleteComment(id)}>
              DeleteComment
            </button>
          </div>
        );
      })}

      <div>
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
      <button onClick={() => goBack()}>Voltar</button>
    </div>
  );
};

export default Post;
