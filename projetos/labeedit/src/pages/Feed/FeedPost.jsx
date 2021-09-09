import { useState } from "react";
import { doCreatePost } from "../../services/RequestApi";
import { Input, ButtonAdd, ButtonLogout, ContainerButtonLogout } from "./Style";
import { useHistory } from "react-router-dom";

const FeedPost = () => {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState("");
  const { push } = useHistory();

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    setTimeout(() => {
      setLoading(false);
      push("/login");
    }, 2000);
  };

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
      <Input
        placeholder="Title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        min={8}
      />
      <Input
        placeholder="Comment"
        type="text"
        onChange={(e) => setComments(e.target.value)}
        min={8}
      />
      <ButtonAdd onClick={sendComments} disabled={loading}>
        post
      </ButtonAdd>
      <ContainerButtonLogout>
        <ButtonLogout onClick={() => handleLogout()} disabled={loading}>
          Logout
        </ButtonLogout>
      </ContainerButtonLogout>
    </div>
  );
};

export default FeedPost;
