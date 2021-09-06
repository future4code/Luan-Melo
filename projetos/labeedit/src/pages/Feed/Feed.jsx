import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import FeedContainer from "./FeedContainer";

const Feed = () => {
  return (
    <PrivateRoute>
      <FeedContainer />
    </PrivateRoute>
  );
};

export default Feed;
