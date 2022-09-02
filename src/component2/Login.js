import React, { useState } from "react";
import axios from "axios";
import { dataContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function Login() {
  const [submit, setSubmit] = useState();
  const { setUserDetails } = useContext(dataContext);

  const navigate = useNavigate();

  const submitHadler = async () => {
    console.log(submit);
    const url = `https://jsonplaceholder.typicode.com/users?email=${submit}`;
    await axios.get(url).then((responce) => setUserDetails(responce.data[0]));
    navigate("/users");
  };

  return (
    <div>
      <Container>
        <div className="my-5">
          <input
            type="text"
            id="users"
            onChange={(e) => setSubmit(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <Button variant="primary" onClick={() => submitHadler()}>
          {" "}
          Submit
        </Button>
      </Container>
    </div>
  );
}
export default Login;
