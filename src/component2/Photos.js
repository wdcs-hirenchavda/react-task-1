import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios';
import { dataContext } from './Context';
import Card from 'react-bootstrap/Card';
function Photos() {
  const {loginData} = useContext(dataContext)
  const [photoShow,setPhotoShow] = useState([])
 
  useEffect(() => {
    (async () => {
      const post2=await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${loginData.id}`)
      setPhotoShow(post2.data)

    })()


  },[])
  return (
    <div>
      {photoShow.map(post=>
            <div className='grid-container'>
               <Card  style={{ width: '18rem'}}>
                  <Card.Img variant="top" src={post.url} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                
                    
                  </Card.Body>
                </Card>
                </div>
        )}
      
    </div>
  )
}

export default Photos
