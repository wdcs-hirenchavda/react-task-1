import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import SingOut from "./SingOut";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import ReactPaginate from "react-paginate";
import Pagination from "react-bootstrap/Pagination";
import "./Panigation.css";

function Photos() {
  const [photoShow, setPhotoShow] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  let { search } = useLocation();
  let { albumId, page } = queryString.parse(search);

const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      // const result = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${loginData.id}`)
      //       Promise.all(result.data.map(r=> axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${r.id}`).then(res => { setPhotoShow( res.data)}))
      //       )
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        setPhotoShow(res.data);
        setPageNumber(page);  
      })();
    }, [albumId,page]);
    
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    
    const displayUsers = photoShow
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Col>
          {/* <div className="grid-container"> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.url} />
            <Card.Body>
              <Card.Title>{user.title}</Card.Title>
            </Card.Body>
          </Card>
          {/* </div> */}
        </Col>
      );
    });
    
    const pageCount = Math.ceil(photoShow.length / usersPerPage);
    
    const changePage = ({ selected }) => {  
      setPageNumber(selected + 1);
      navigate(`/photos?albumId=${albumId}&page=${selected + 1}`)
    };
    

  

  return (
    <div>
      <Container>
        <Row>
          <SingOut />
          {displayUsers}
          <Pagination>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              forcePage = {page?page -1:0}        
              renderOnZeroPageCount={null}

            //   className="cmn-Pagination mt-4"
            //   breakLabel="..."
            //   nextLabel="next >"
            //   onPageChange={(e) => onPageClick('page', e)}
            //   pageRangeDisplayed={5}
            //   pageCount={state.total_pages?state.total_pages:0}
            //   previousLabel="< previous"
            //   renderOnZeroPageCount={null}
            //   forcePage={page}
             />
          </Pagination>
        </Row>
      </Container>
    </div>
  );
}

export default Photos;
