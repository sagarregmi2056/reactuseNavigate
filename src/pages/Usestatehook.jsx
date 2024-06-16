// use state hook

import { useState } from "react";

const Usestatehook = () => {
  // class one
  const [myname, setname] = useState("sagar");

  const changemyname = () => {
    setname("ashok");
  };

  return (
    <>
      <h1>use state hook</h1>

      <h1>my name is {myname}</h1>
      <button onClick={changemyname}>change my state to see result</button>
    </>
  );
};

export default Usestatehook;
