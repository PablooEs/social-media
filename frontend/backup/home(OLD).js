import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBox,
} from "mdbreact";
import Navbar from "./layout/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postsActions";
import apiService from "../adapters/index";
import Cookies from "universal-cookie";

function Home() {
  let posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const cookies = new Cookies();

  useEffect(() => {
    async function fetchPosts() {
      apiService.posts.getPosts().then((response) => {
        dispatch(getPosts(response.data.posts));
      });
    }
    fetchPosts();
  }, []);

  function createPost(data) {
    const userId = cookies.get("user")._id;
    const postData = { user: userId, content: data };
    apiService.posts.createPost(postData);
    apiService.posts.getPosts().then((response) => {
      dispatch(getPosts(response.data.posts));
    });
    setContent("");
  }

  if (posts) {
    return (
      <>
        <Navbar />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"></MDBCol>
            <MDBCol md="8" sm="9">
              <MDBCard
                className="card-body"
                style={{ width: "35em", marginTop: "1rem" }}
              >
                <label htmlFor="TextArea">Create a new post</label>
                <textarea
                  id="TextArea"
                  rows="5"
                  validate
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <MDBBtn
                  gradient="blue"
                  rounded
                  size="sm"
                  onClick={() => {
                    createPost(content);
                  }}
                >
                  Post
                </MDBBtn>
              </MDBCard>

              {posts.map((post) => (
                <MDBCard
                  className="card-body"
                  style={{ width: "35em", marginTop: "1rem" }}
                  key={post._id}
                >
                  <MDBCardTitle>{post.user.username}</MDBCardTitle>
                  <MDBCardText>{post.content}</MDBCardText>
                  <MDBBox tag="p">
                    <small>Date: {post.date_of_post}</small>
                  </MDBBox>
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
