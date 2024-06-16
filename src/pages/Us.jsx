import { useState } from "react";

const Us = () => {
  const myarray = useState("sagar");

  const changestate = () => {
    myarray[1]("sachin");
  };
  return (
    <>
      my name is {myarray[0]}
      {/* <button onClick={() => myarray[1]("sachin")}>
        click to change state
      </button> */}
      <button onClick={changestate}>click me to change state</button>
    </>
  );
};

export default Us;
