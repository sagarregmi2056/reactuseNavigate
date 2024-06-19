import axios from "axios";
import { useState } from "react";

const SendData = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post(
      "https://66712b38e083e62ee43a5e4f.mockapi.io/crudd",

      {
        name,
        email,
      }
    );
  };

  return (
    <>
      <h1>we are sending data</h1>

      <form onSubmit={handlesubmit}>
        <label>name</label>

        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setname(e.target.value)}
        ></input>
        <label>email</label>

        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setemail(e.target.value)}
        ></input>

        <button type="submit">submit</button>
      </form>

      <p>
        {name} {email}
      </p>
    </>
  );
};

export default SendData;
