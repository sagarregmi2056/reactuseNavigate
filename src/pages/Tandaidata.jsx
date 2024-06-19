import axios from "axios";
import { useEffect, useState } from "react";

const Tandaidata = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://66712b38e083e62ee43a5e4f.mockapi.io/crudd")
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  return (
    <>
      <h1>Tandaidata</h1>
      {data.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>edit</li>
            <li>delete</li>
          </ul>
        );
      })}
    </>
  );
};

export default Tandaidata;
