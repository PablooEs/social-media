import React, { useState } from "react";
import { MDBCard, MDBBtn } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";
import apiService from "../../adapters/index";
import Cookies from "universal-cookie";

function CreatePost() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const cookies = new Cookies();
  const user = useSelector((state) => state.login);

  function createPost(data) {
    const userId = user._id;
    const postData = { user: userId, content: data };
    apiService.posts.createPost(postData);
    apiService.posts.getPosts().then((response) => {
      dispatch(getPosts(response.data.posts));
    });
    setContent("");
  }

  return (
    <>
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
    </>
  );
}

export default CreatePost;
