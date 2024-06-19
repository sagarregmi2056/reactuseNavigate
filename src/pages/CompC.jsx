import React, { useContext } from "react";
import { nameContext } from "../App";

const CompC = () => {
  const myname = useContext(nameContext);
  return <>hi i am CompC{myname}</>;
};

export default CompC;
