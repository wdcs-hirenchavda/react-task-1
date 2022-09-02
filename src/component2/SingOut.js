import React, { useContext } from 'react'
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { dataContext } from './Context';


function SingOut() {
  const {loginData, setUserDetails} = useContext(dataContext)

    const navigate = useNavigate()
    const signOutHadler = ()=>{
        localStorage.removeItem(loginData);
        setUserDetails({})
        navigate('/login');
    }
  return (
    <div>
      <Button variant="primary" onClick={()=>{signOutHadler()}} > SignOut</Button>
    </div>
  )
}

export default SingOut
