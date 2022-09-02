import React, { useContext, useState,useEffect } from 'react'
import { dataContext } from './Context'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


function Albums() {
  const {loginData} = useContext(dataContext)
  const[albumshow,setAlbumShow] = useState([])
  const [photo,setPhoto]= useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const post2=await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${loginData.id}`)
      setAlbumShow(post2.data)

      const pos32=await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${loginData.id}`)
      setPhoto(pos32.data.length)
      // {albumshow.map(post=>
      //   op = axios.get(`https://jsonplaceholder.typicode.com/photos?=${post.id}`)
        

      
    })()


  },[])
  return (
    <div className="my-3">
      <Container>

      <div>
        <h1>Album Details of {loginData.username}</h1>
      </div>
        <div className="my-3" >

       {albumshow.map(post=>
               <Card>
               <Card.Body>{post.title}</Card.Body>
             </Card>
        )}
        
          <Button onClick={()=>navigate('/photos')} > Photos- {photo}</Button>
        </div>
        
        </Container>
    </div>
  )
}

export default Albums
