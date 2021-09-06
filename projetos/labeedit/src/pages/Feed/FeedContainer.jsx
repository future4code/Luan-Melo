import { useHistory } from "react-router";
import { useFeedList } from "../../hooks/useFeedList";
import { doCreatePostVote, doRemovePostVote } from "../../services/RequestApi";
import { ThreeHorseLoading } from "react-loadingg";
import FeedPost from "./FeedPost";
import {
  CardContainer,
  ContainerButton,
  ButtonMore,
  ButtonAnyLess,
  Card,
  ButtonRemove,
} from "./Style";

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
    <CardContainer>
      <h1>Feed</h1>
      {loading ? (
        <ThreeHorseLoading />
      ) : (
        <div>
          <FeedPost />
          {data?.map(({ username, title, body, voteSum, commentCount, id }) => {
            return (
              <Card key={id}>
                <h3 onClick={() => handleRedirection(id)}>{username}</h3>
                <h3>Title: {title}</h3>
                <p>Comment: {body}</p>

                <ContainerButton>
                  <ButtonMore onClick={() => handleVote(id, true)}>
                    +
                  </ButtonMore>
                  <span>{voteSum === null ? 0 : voteSum}</span>
                  <ButtonAnyLess onClick={() => handleVote(id, false)}>
                    -
                  </ButtonAnyLess>
                  <ButtonRemove onClick={() => handleDeleteVote(id)}>
                    x
                  </ButtonRemove>
                  <p>
                    {commentCount === null
                      ? "0 comments"
                      : `${commentCount} comments`}
                  </p>
                </ContainerButton>
              </Card>
            );
          })}
        </div>
      )}
    </CardContainer>
  );
};

export default FeedContainer;
