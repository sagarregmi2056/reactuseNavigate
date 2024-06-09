import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>contact</h1>

      <h1>
        <Link to="user/1">User1</Link>
      </h1>
      <h1>
        <Link to="user/2">User2</Link>
      </h1>
      <h1>
        <Link to="user/3">User3</Link>
      </h1>

      <h1>
        <Link to="user/4">User4</Link>
      </h1>
      <h1>
        <Link to="user/admin">admin</Link>
      </h1>

      <h1>
        <Link to="user/5">User5</Link>
      </h1>
      <Outlet />
    </>
  );
};

export default Contact;
