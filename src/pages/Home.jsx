import { useNavigate } from "react-router-dom";

const Home = () => {
  // hook lai init gariyo
  const navigateme = useNavigate();

  const pathao = () => {
    navigateme("/about");
  };

  return (
    <>
      <div>i am home page</div>

      <button onClick={pathao}>Go to other page</button>
    </>
  );
};

export default Home;
