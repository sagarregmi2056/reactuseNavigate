import { Link, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <>
      <h2>category</h2>
      <li>
        <Link to="male">male</Link>
      </li>

      <li>
        <Link to="female">female</Link>
      </li>

      <Outlet />
    </>
  );
};

export default Category;
