import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const userName = useParams();

  console.log(userName.id);

  return (
    <>
      <h1>this is your name :{userName.id} </h1>
    </>
  );
};

export default StudentDetails;
