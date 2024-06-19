import axios from "axios";
import { useState } from "react";

const Onchangeevent = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post("https://66710a31e083e62ee439d3b0.mockapi.io/crudapi", {
      name,
      email,
    });
    e.target.reset();
  };

  return (
    <>
      <h1>welcome to onchange event class</h1>

      <form onSubmit={handlesubmit}>
        <label>Enter your name</label>

        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setname(e.target.value)}
        />
        <label>Enter your email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setemail(e.target.value)}
        ></input>

        <button type="submit">submit</button>
      </form>

      {name}
      <br />
      {email}
    </>
  );
};

export default Onchangeevent;
