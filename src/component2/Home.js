import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>
        Welcome to our Website
      </h1>
      <button onClick={()=> navigate('/login')} > Go to Login</button>
    </div>
  )
}

export default Home
