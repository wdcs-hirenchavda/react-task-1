import React, { useState ,useContext, useEffect } from 'react'
import { dataContext } from './Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
function Posts() {
  const {loginData} = useContext(dataContext)
  const [postshow,setPostShow] = useState([]);
  const [comment,setComment] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const post2= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${loginData.id}`)
      setPostShow(post2.data)

      const po = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${loginData.id}`) 
      setComment(po.data.length)

    })()


  },[])

  

 

  return (
    
    <div className="my-3" >
      <div>
      </div>
      <Container>
        <h1>Post Details of {loginData.username}</h1>
        <Row>

      {postshow.map(post=>
      <Col>
            <Card style={{ width: '18rem',marginTop: '3rem' }}>
              
            <Card.Body>
              <Card.Title>Title: {post.title}</Card.Title>
              <Card.Text>
               Body: {post.body}
              </Card.Text>
              <Button variant="primary" onClick={()=>navigate('/comments')} >Comments - {comment}</Button>
            </Card.Body>
          </Card>
      </Col>
        )}
        </Row>
        </Container>
    <div>
    </div>
    </div>
        
  )
}

export default Posts
