import React, { useState } from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { useSelector } from "react-redux";
import apiService from "../../adapters/index";

function CreateComment(props) {
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.login);
  const postId = props.postId;

  function createComment(data) {
    const userId = user._id;
    const commentData = { user: userId, post: postId, content: data };
    apiService.comments.createComment(commentData);
    setContent("");
    alert("Comment added succesfully!");
    setTimeout(() => {
      props.onChange();
    }, 1000);
  }

  return (
    <div>
      <MDBRow className="no-gutters">
        <MDBCol size="11">
          <input
            type="text"
            placeholder="Create comment"
            className="commentInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </MDBCol>
        <MDBCol size="1">
          <button
            className="commentButton"
            onClick={() => {
              createComment(content);
            }}
          >
            <MDBIcon icon="paper-plane" />
          </button>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default CreateComment;
