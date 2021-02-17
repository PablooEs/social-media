import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBBox } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../redux/actions/postsActions";
import apiService from "../../adapters/index";

function UserPosts() {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();

  setTimeout(function fetchPosts() {
    if (user._id) {
      apiService.user.getUserPosts(user._id).then((response) => {
        dispatch(getUserPosts(response.data.posts));
      });
    }
  }, 1000);

  // useEffect(() => {
  //   function fetchPosts() {
  //     if (user._id) {
  //       apiService.user.getUserPosts(user._id).then((response) => {
  //         dispatch(getUserPosts(response.data.posts));
  //       });
  //     }
  //   }
  //   fetchPosts();
  // }, []);

  if (posts) {
    return (
      <>
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
      </>
    );
  }
  return <h1>You haven't post yet...</h1>;
}

export default UserPosts;
