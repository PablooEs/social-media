import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBBox } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";
import apiService from "../../adapters/index";

function UserPosts(props) {
  console.log(props);
  //const { userId } = props.location.state;
  let posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     apiService.user.getUserPosts(userId).then((response) => {
  //       dispatch(getPosts(response.data.posts));
  //     });
  //   }, []);

  if (posts.length > 1) {
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
