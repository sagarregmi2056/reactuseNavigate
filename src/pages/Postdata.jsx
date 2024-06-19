import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Postdata = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://66712b38e083e62ee43a5e4f.mockapi.io/crudd", {
        name,
        email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/results");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <lable>name</lable>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <lable>email</lable>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>

      {name}
      <br />
      {email}
    </>
  );
};

export default Postdata;
