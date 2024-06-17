// use state hook

import { useState } from "react";

const Usestatehook = () => {
  const obj = {
    name: "dell",
    age: 23,
    model: "xps",
    brand: "dell",
    price: 10000,
    isOld: false,
  };

  const [myname, setname] = useState(obj);

  const changemyname = () => {
    // setname((pailakojanma) => {
    //   return {
    //     ...pailakojanma,
    //     name: "lenovo",
    //     age: 20,
    //   };
    // });

    setname({
      ...myname,
      name: "lenovo",
      age: 20,
    });
  };

  return (
    <>
      <h1>use state hook</h1>

      <h1> {myname.name}</h1>
      <h1>{myname.age}</h1>
      <h1>{myname.model}</h1>
      <h1>{myname.brand}</h1>
      <h1>{myname.price}</h1>
      <h1>{myname.isOld.toString()}</h1>
      <button onClick={changemyname}>change my state to see result</button>
    </>
  );
};

export default Usestatehook;
