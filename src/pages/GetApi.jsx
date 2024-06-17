import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/users";

const GetApi = () => {
  const [firstdata, setdata] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setdata(response.data);
      console.log(response);
    });
  }, []);

  return (
    <>
      <div>
        {firstdata.map((user) => {
          return (
            // Added return statement here
            <ul key={user.id}>
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>{user.address.street}</li>
              <li>{user.address.suite}</li>
              <li>{user.address.city}</li>
              <li>{user.address.zipcode}</li>
              <li>{user.address.geo.lat}</li>
              <li>{user.address.geo.lng}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default GetApi;
