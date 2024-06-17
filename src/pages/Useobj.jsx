import React, { useState } from "react";

const Useobj = () => {
  const obj = {
    name: "dell",
    age: 23,
    model: "xps",
    brand: "dell",
    price: 10000,
  };
  const [value, setValue] = useState(obj);

  const changestate = () => {
    setValue((agadikostate) => {
      return {
        ...agadikostate,
        name: "sagar",
      };
    });
  };

  return (
    <>
      {value.name}
      {value.age}

      <button onClick={changestate}>click</button>
    </>
  );
};

export default Useobj;
