import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "./Context";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SingOut from "./SingOut";

function Users() {
  const { loginData } = useContext(dataContext);
  const [postCount, setPostCount] = useState();
  const [albumCount, setAlbumCount] = useState();
  const [todoCount, setTodoCount] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const post1 = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${loginData.id}`
        );
        setPostCount(post1.data.length);
        console.log("postdata", post1.data);

        const Album = await axios.get(
          `https://jsonplaceholder.typicode.com/albums?userId=${loginData.id}`
        );
        setAlbumCount(Album.data.length);

        const Todo = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?userId=${loginData.id}`
        );
        setTodoCount(Todo.data.length);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [loginData]);
  
  return (
    <div className="container">
      <SingOut/>
      <h2>Welcome {loginData.username}</h2>
      <div className="my-5">
        <Button
          variant="primary"
          className="mx-3 "
          onClick={() => navigate("/posts")}
        >
          {" "}
          Posts- {postCount}
        </Button>
        <Button
          variant="primary"
          className="mx-3 "
          onClick={() => navigate("/albums")}
        >
          {" "}
          Albums- {albumCount}
        </Button>
        <Button
          variant="primary"
          className="mx-3 "
          onClick={() => navigate("/todos")}
        >
          {" "}
          Todo- {todoCount}
        </Button>
      </div>
    </div>
  );
}

export default Users;
