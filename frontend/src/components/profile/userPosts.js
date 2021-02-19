import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBBox,
  MDBTypography,
  MDBIcon,
} from "mdbreact";
import { useSelector } from "react-redux";
import apiService from "../../adapters/index";
import Cookies from "universal-cookie";
import "./btnDelete.css";

function UserPosts() {
  const user = useSelector((state) => state.login);
  const [posts, setPosts] = useState([]);
  const cookies = new Cookies();

  useEffect(() => {
    async function fetchPosts() {
      apiService.user.getUserPosts(cookies.get("user")._id).then((response) => {
        setPosts(response.data.posts);
      });
    }
    fetchPosts();
  }, []);

  function deletePost(postId) {
    apiService.posts.deletePost(postId);
    setTimeout(() => {
      apiService.user.getUserPosts(cookies.get("user")._id).then((response) => {
        setPosts(response.data.posts);
      });
    }, 1000);
  }

  if (posts && posts.length > 0) {
    return (
      <>
        {posts.map((post) => (
          <MDBCard
            className="card-body"
            style={{ width: "35em", marginTop: "1rem" }}
            key={post._id}
          >
            <MDBCardTitle>
              {post.user.username}{" "}
              <button
                className="btn-delete"
                onClick={() => {
                  deletePost(post._id);
                }}
              >
                <MDBIcon icon="trash" />
              </button>
            </MDBCardTitle>
            <MDBCardText>{post.content}</MDBCardText>
            <MDBBox tag="p">
              <small>Date: {post.date_of_post} </small>
            </MDBBox>
          </MDBCard>
        ))}
      </>
    );
  }
  return (
    <>
      <MDBTypography tag="h1" variant="h1" colorText="white-text">
        You haven't post yet...
      </MDBTypography>
      <h2>ID:{user._id}</h2>
      <h2>UserName: {user.username}</h2>
    </>
  );
}

export default UserPosts;
