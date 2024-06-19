import { Link, Outlet } from "react-router-dom";
import FetchData from "./FetchData";

const Results = () => {
  return (
    <>
      <h1>results page</h1>
      <h2>
        <Link to="pass">pass students</Link>
        <Link to="fail">fail students</Link>

        <FetchData />
      </h2>
      <Outlet />
    </>
  );
};

export default Results;
