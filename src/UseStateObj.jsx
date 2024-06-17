import React, { useState } from "react";

const UseStateObj = () => {
  const obj = {
    name: "dell",
    age: 23,
    model: "xps",
    brand: "dell",
    price: 10000,
    isSold: true,
  };

  const [value, setValue] = useState(obj);

  const changemystate = () => {
    setValue({
      ...value,
      name: "sagar",
    });
  };

  return (
    <>
      <h1>{value.name}</h1>
      <h1>{value.age}</h1>
      <h1>{value.model}</h1>
      <h1>{value.brand.toLowerCase()}</h1>
      <h1>{value.price}</h1>
      <h1>{value.isSold.toString()}</h1>

      <button onClick={changemystate}>click me to change obj</button>
    </>
  );
};

export default UseStateObj;
