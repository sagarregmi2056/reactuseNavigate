import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://66712b38e083e62ee43a5e4f.mockapi.io/crudd")
      .then((res) => setPosts(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>here is the map data</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.id}</li>
          <li>{post.name}</li>
          <li>{post.email}</li>
        </ul>
      ))}
    </>
  );
};

export default FetchData;
