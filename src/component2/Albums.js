import React, { useContext, useState,useEffect } from 'react'
import { dataContext } from './Context'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
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
    <div>
      <div>
        <h2>Album Details of {loginData.username}</h2>
      </div>
       {albumshow.map(post=>
            <ul>
                <li >Title:- {post.title}</li>
                
            </ul>
        )}
        <div>
          <button onClick={()=>navigate('/photos')} > Photos{photo}</button>
        </div>
    </div>
  )
}

export default Albums
