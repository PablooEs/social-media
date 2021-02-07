import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import Navbar from "./layout/navbar";
const axios = require("axios");

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      let response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data.posts);
    }
    getPosts();
  }, []);
  if (posts) {
    return (
      <>
        <Navbar />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"></MDBCol>
            <MDBCol md="9">
              {posts.map((post) => (
                <MDBCard
                  className="card-body"
                  style={{ width: "35rem", marginTop: "1rem" }}
                  key={post._id}
                >
                  <MDBCardTitle>{post.user.username}</MDBCardTitle>
                  <MDBCardText>{post.content}</MDBCardText>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
  return "Loading...";
}

export default Home;
