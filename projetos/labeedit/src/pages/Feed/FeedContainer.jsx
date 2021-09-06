import { useHistory } from "react-router";
import { useFeedList } from "../../hooks/useFeedList";
import { doCreatePostVote, doRemovePostVote } from "../../services/RequestApi";
import Header from "../Header/Header";
import FeedPost from "./FeedPost";

const FeedContainer = () => {
  const token = localStorage.getItem("token") || "";
  const { data, loading } = useFeedList({ token });
  const { push } = useHistory();

  const handleRedirection = (id) => {
    push(`/post/${id}`);
  };

  const handleVote = async (id, voteType) => {
    const obj = voteType ? { direction: 1 } : { direction: -1 };
    await doCreatePostVote({
      id,
      token,
      obj,
    }).then(() => {
      window.location.reload();
    });
  };

  const handleDeleteVote = async (id) => {
    await doRemovePostVote({ id, token }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <Header />
      <h1>Feed</h1>
      {loading ? (
        <p>Carregando.. </p>
      ) : (
        <div>
          <FeedPost />
          {data?.map(({ username, title, body, voteSum, commentCount, id }) => {
            return (
              <div key={id}>
                <div>
                  <h1 onClick={() => handleRedirection(id)}>
                    Name: {username}
                  </h1>
                  <h3>Post: {title}</h3>
                  <p>Comentário: {body}</p>
                  <p>Vote:{voteSum}</p>
                  <p>{commentCount}Comentarios</p>
                  <button onClick={() => handleVote(id, true)}>Mais</button>
                  <button onClick={() => handleVote(id, false)}>Menos</button>
                  <button onClick={() => handleDeleteVote(id)}>
                    RemoveLike
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FeedContainer;
