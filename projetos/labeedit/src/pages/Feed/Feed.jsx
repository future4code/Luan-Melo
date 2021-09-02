import { useFeedList } from "../../hooks/useFeedList";

const Feed = () => {
  const token = localStorage.getItem("token") || "";
  const { data, loading } = useFeedList({ token });

  return (
    <div>
      <h1>Feed</h1>
      {loading ? (
        <p>Carregando.. </p>
      ) : (
        data?.map(({ username, title, id }) => {
          return (
            <div key={id}>
              <li>
                <p>Name: {username}</p>
                <p>Post: {title}</p>
              </li>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Feed;
