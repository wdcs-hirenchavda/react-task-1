import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "./Context";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import SingOut from "./SingOut";

function Todo() {
  const { loginData } = useContext(dataContext);
  const [todoShow, setTodoShow] = useState([]);

  useEffect(() => {
    (async () => {
      const post2 = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${loginData.id}`
      );
      setTodoShow(post2.data);
    })();
  }, [loginData]);
  return (
    <div>
      <SingOut/>
      <Container>

      {todoShow.map((post) => (
        <Card>
         <Card.Body>{post.title}</Card.Body>
       </Card>
      ))}
      </Container>
    </div>
  );
}

export default Todo;
