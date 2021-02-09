import React, { useEffect } from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBBox } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";
import apiService from "../../adapters/index";

function ViewPosts() {
  let posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPosts() {
      apiService.posts.getPosts().then((response) => {
        dispatch(getPosts(response.data.posts));
      });
    }
    fetchPosts();
  }, []);

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
  return "Loading...";
}

export default ViewPosts;
