import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigateme = useNavigate();

  const malailaija = () => {
    navigateme("/");
  };

  return (
    <>
      <div> HI i am AboutUs page</div>

      <button onClick={() => window.history.back()}>Go Back</button>

      <button onClick={malailaija}>Go to home page</button>
    </>
  );
};

export default AboutUs;
