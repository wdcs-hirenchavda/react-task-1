import React,{useContext} from 'react'
import {userContext,nameContext} from '../App';
function Context() {
    const user = useContext(userContext)
    const name = useContext (nameContext)
  return (
    
    <div className="container">
      <br />
      {user}  - {name}
    </div>
  )
}

export default Context
