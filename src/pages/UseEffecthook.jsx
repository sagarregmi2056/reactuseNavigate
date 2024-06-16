import { useEffect, useState } from "react";

const UseEffecthook = () => {
  const [name, setname] = useState("sachin");

  const changemypassword = () => {
    setname("sagar");
  };

  useEffect(() => {
    console.log("hiiii am useeffect hook");
  }, []);

  return (
    <>
      <h1>useEffect hook</h1>

      <h1>{name}</h1>

      <button onClick={changemypassword}>change my password</button>
    </>
  );
};

export default UseEffecthook;
