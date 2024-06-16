import { Link, Outlet } from "react-router-dom";

const Akkar11 = () => {
  return (
    <>
      aakar 11
      <h2>
        <Link to="student/amrit">amrit</Link>
      </h2>
      <h2>
        <Link to="student/umesh">umesh</Link>
      </h2>
      <h2>
        <Link to="student/pragyan">pragyan</Link>
      </h2>
      <h2>
        <Link to="student/shraddha">shraddha</Link>
      </h2>
      <h2>
        <Link to="student/dilip">dilip</Link>
      </h2>
      <h2>
        <Link to="student/sagar">sagar</Link>
      </h2>
      <Outlet />
    </>
  );
};

export default Akkar11;
