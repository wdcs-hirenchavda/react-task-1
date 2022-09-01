import React, {  useState } from "react";
// import { useParams } from 'react-router-dom';
import axios from "axios";
import { dataContext } from "./Context";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";


function Login() {

    // const [users, setUsers] = useState({});
    const [submit, setSubmit] = useState();
    const {setUserDetails} = useContext(dataContext);
    
 
    
const navigate = useNavigate();
// console.log("navigate",navigate);

const submitHadler = async() => {
      // User Data 
    //   navigate("/users")
    console.log(submit);
    const url = `https://jsonplaceholder.typicode.com/users?email=${submit}`;
    await axios.get(url).then((responce) => setUserDetails(responce.data[0]));
     navigate("/users")

  };




  return (
     <div>
      
        <div>
         <input 
           type="text"
           id="users"
           onChange={(e) => setSubmit(e.target.value)}
           placeholder="Enter email"/>
          <button onClick={()=> submitHadler() }  > Submit</button> 
       </div> 

    
      
     </div>
  );
 }
export default Login;

