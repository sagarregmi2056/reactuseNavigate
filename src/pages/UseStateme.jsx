import { useEffect, useState } from "react";
const UseStateme = () => {
  // classs 2
  const [myname, setname] = useState("amrit");

  const changemyname = () => {
    setname("ashok");
  };

  // useeffect hook
  useEffect(() => {
    alert(" i am mounting");
    return () => {
      alert("i am unmounting");
    };
  }, [myname]);

  return (
    <>
      <h1>my name is {myname}</h1>

      <button onClick={changemyname}>click me to update state</button>
    </>
  );
};

export default UseStateme;
