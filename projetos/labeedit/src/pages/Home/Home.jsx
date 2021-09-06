import { useHistory } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  const { push } = useHistory();
  return (
    <div>
      <Header />
      <h1>HOME</h1>
      <button onClick={() => push("/login")}>Acessar</button>
    </div>
  );
};
export default Home;
