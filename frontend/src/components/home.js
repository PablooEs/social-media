import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import Navbar from "./layout/navbar";
import { getPosts } from "../adapters/posts_adapter";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);

  const value = () => {
    setPosts(getPosts());
    console.log(value);
    return true;
  };

  if (value === true) {
    return (
      <>
        <Navbar />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"></MDBCol>
            <MDBCol md="9">
              {posts.map((post) => {
                <MDBCard
                  className="card-body"
                  style={{ width: "35rem", marginTop: "1rem" }}
                >
                  <MDBCardTitle>{post.user.username}</MDBCardTitle>
                  <MDBCardText>{post.content}</MDBCardText>
                </MDBCard>;
              })}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
  return "Loading...";
}

export default Home;
