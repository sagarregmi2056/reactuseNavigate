import { useParams } from "react-router-dom";

const UserDetails = () => {
  // use params hook

  // use navigate hook
  const timroid = useParams();

  console.log(timroid.id);

  return (
    <>
      <h1>This is your userid/name {timroid.id}</h1>
    </>
  );
};

export default UserDetails;
