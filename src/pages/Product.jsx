import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <h2>Hi i am product page</h2>
      <h2>
        <Link to="tshirt">tshirt</Link>
      </h2>

      <h2>
        <Link to="pant">pant</Link>
      </h2>

      <Outlet />
    </>
  );
};

export default Product;
