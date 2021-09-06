import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import PostContainer from "./PostContainer";

const Feed = () => {
  return (
    <PrivateRoute>
      <PostContainer />
    </PrivateRoute>
  );
};

export default Feed;
