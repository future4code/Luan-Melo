import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import {
  doCreateComments,
  doCreateCommentVote,
  doGetDetailsComments,
  doRemoveCommentPost,
} from "../../services/RequestApi";
import {
  Container,
  ButtonAdd,
  ContainerCart,
  ButtonLogout,
  ContainerButton,
  ButtonMore,
  ButtonAnyLess,
  ButtonRemove,
  ContainerCommment,
  ContainerScroll,
} from "./Style";

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
    <Container>
      {postDetails?.map((post) => {
        const { body, username, userVote, id } = post;
        return (
          <ContainerCart key={id}>
            <ContainerScroll>
              <div>
                <h3>{username}</h3>
                <hr />
              </div>
              <p>Comment: {body}</p>
              <ContainerButton>
                <ButtonMore onClick={() => handleCommentVote(id, true)}>
                  +
                </ButtonMore>
                <p>{userVote}</p>
                <ButtonAnyLess onClick={() => handleCommentVote(id, false)}>
                  -
                </ButtonAnyLess>
                <ButtonRemove onClick={() => handleDeleteComment(id)}>
                  x
                </ButtonRemove>
              </ContainerButton>
            </ContainerScroll>
          </ContainerCart>
        );
      })}

      <div>
        <input
          placeholder="Comment"
          type="text"
          onChange={(e) => setComments(e.target.value)}
          min={8}
        />
        <ContainerCommment>
          <ButtonAdd onClick={sendComments} disabled={loading}>
            Post
          </ButtonAdd>
          <ButtonLogout onClick={() => goBack()}>Voltar</ButtonLogout>
        </ContainerCommment>
      </div>
    </Container>
  );
};

export default Post;
