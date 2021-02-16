import React, { useState } from "react";
import { MDBCard, MDBBtn } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";
import apiService from "../../adapters/index";

function CreatePost() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.login);

  function createPost(data) {
    const userId = user._id;
    const postData = { user: userId, content: data };
    apiService.posts.createPost(postData);
    setTimeout(() => {
      apiService.posts.getPosts().then((response) => {
        dispatch(getPosts(response.data.posts));
      });
    }, 1000);

    setContent("");
  }

  return (
    <>
      <MDBCard
        className="card-body"
        style={{ width: "35em", marginTop: "1rem" }}
      >
        <label>Create a new post</label>
        <textarea
          rows="5"
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
    </>
  );
}

export default CreatePost;
