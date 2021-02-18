import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBBox } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../redux/actions/postsActions";
import apiService from "../../adapters/index";
import Cookies from "universal-cookie";

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

  if (posts && posts.length > 0) {
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
  return (
    <>
      {" "}
      <h1>You haven't post yet...</h1>
      <h2>ID:{user._id}</h2>
      <h2>UserName: {user.username}</h2>
    </>
  );
}

export default UserPosts;
