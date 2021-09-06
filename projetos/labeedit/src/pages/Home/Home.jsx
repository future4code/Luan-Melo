import Header from "../Header/Header";

const Home = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <div>
      <Header />
      <h1>HOME</h1>
    </div>
  );
};
export default Home;
