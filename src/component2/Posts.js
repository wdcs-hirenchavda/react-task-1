import React, { useState ,useContext, useEffect } from 'react'
import { dataContext } from './Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import SingOut from './SingOut';
function Posts() {
  const {loginData} = useContext(dataContext)
  const [comment,setComment] = useState([]);
  const[resp, setResp] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${loginData.id}`)
      setComment(result.data)
            Promise.all(result.data.map(r=> axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${r.id}`).then(res =>{setResp(res.data.length) }))
            )
      

    })()


  },[loginData])

  

 

  return (
    
    <div className="my-3" >
      <SingOut/>
      <div>
      </div>
      <Container>
        <h1>Post Details of {loginData.username}</h1>
        <Row>

      {comment.map(post=>
      <Col>
            <Card style={{ width: '18rem',marginTop: '3rem' }}>
              
            <Card.Body>
              <Card.Title>Title: {post.title}</Card.Title>
              <Card.Text>
               Body: {post.body}
              </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/comments?postId=${post.id}`)} >Comments - {resp}</Button>
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
