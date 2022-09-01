import React, { useContext, useState ,useEffect} from 'react'
import { dataContext } from './Context'
import axios from 'axios';
function Todo() {

    const{loginData} = useContext(dataContext);
    const[todoShow,setTodoShow] = useState([]);

    useEffect(() => {
        (async () => {
          const post2=await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${loginData.id}`)
          setTodoShow(post2.data)
    
        })()
    
    
      },[])
  return (
    <div>
       {todoShow.map(post=>
            <ul>
                <li >Title : {post.title}</li>
                <li >Completed : {post.completed}</li> 
            </ul>
        )}
    </div>
  )
}

export default Todo
