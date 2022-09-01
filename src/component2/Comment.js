import React, { useContext, useState,useEffect } from 'react'
import { dataContext } from './Context'
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col} from 'react-bootstrap';

function Comment() {
    const{loginData} = useContext(dataContext);
    const [comment,setComment] = useState([])


    useEffect(() => {
        (async () => {
          const post2=await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${loginData.id}`)
          setComment(post2.data)
    
        })()
    
    
      },[])

  return (
    <div>
        <Container>
        <Row>

      {comment.map(post=>
      <Col>
           <Card style={{ width: '18rem' }}>
           <ListGroup variant="flush">
             <ListGroup.Item>Name: {post.name}</ListGroup.Item>
             <ListGroup.Item>Email: {post.email}</ListGroup.Item>
             <ListGroup.Item>Body:{post.body}</ListGroup.Item>
           </ListGroup>
         </Card>
      </Col>
        )}
        </Row>
        </Container>
    </div>
  )
}

export default Comment
