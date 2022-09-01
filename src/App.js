import "./App.css";
import React,{ useState} from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Users from "./component2/Users";
import Photos from "./component2/Photos";
import Albums from "./component2/Albums";
import Posts from "./component2/Posts";
import Login from "./component2/Login";
import Comment from "./component2/Comment";
// export const userContext = React.createContext()
// export const nameContext = React.createContext()
 import  { dataContext } from "./component2/Context";
import Todo from "./component2/Todo";

function App() {

  const [loginData, setloginData] = useState(localStorage.loginData?JSON.parse(localStorage.loginData):{});
  const setUserDetails = (data) => {
    setloginData(data)
    localStorage.setItem('loginData', JSON.stringify(data))
  }

  
  return (
    <>
    <dataContext.Provider value = {
      {
        loginData,
        setUserDetails
     
      }
    }> 
      

      <Router>  

        <Routes>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/users" element={<Users/>}/>
          <Route  path="/posts" element={<Posts/>}/>
          <Route  path="/photos" element={<Photos/>}/>
          <Route  path="/albums" element={<Albums/>}/>
          <Route  path="/todos" element={<Todo/>}/>
          <Route  path="/comments" element={<Comment/>}/>
          </Routes>
      </Router>
    </dataContext.Provider>
      
    </>
  );
}

export default App;






//  https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ
//  https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=1npm   
//  https://medium.com/docler-engineering/applying-solid-to-react-ca6d1ff926a4 