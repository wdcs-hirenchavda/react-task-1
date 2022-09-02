import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col} from 'react-bootstrap';
import SingOut from './SingOut';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
function Comment() {
    const [commentsa,setCommentsa] = useState([])
    let { search } = useLocation()
    let { postId } = queryString.parse(search)

    useEffect(() => {
        (async () => {
          // const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${loginData.id}`)
          //   Promise.all(result.data.map(r=> axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${r.id}`).then(res => { setCommentsa( res.data)}))
          //   )
            const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            setCommentsa(res.data);
            
          })()
          
          
        },[postId])
        
        
  return (
    <div>
      <SingOut/>
        <Container>
        <Row>

      {commentsa.map(post=>
      <Col>
           <Card style={{ width: '18rem' }}>
           <ListGroup variant="flush">
             <ListGroup.Item>Name: {post.name}</ListGroup.Item>
             <ListGroup.Item>Body:{post.body}</ListGroup.Item>
             <ListGroup.Item>Email: {post.email}</ListGroup.Item>
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
