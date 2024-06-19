import { useContext } from "react";
import { paisadeu } from "../App";

const Ashok = () => {
  const meropaisa = useContext(paisadeu);

  return <div>Ashok ley {meropaisa}</div>;
};

export default Ashok;
