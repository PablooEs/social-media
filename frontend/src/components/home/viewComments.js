import React, { useEffect, useState } from "react";
import { MDBTypography } from "mdbreact";
import apiService from "../../adapters/index";
import CreateComment from "../home/createComment";

function ViewComments(props) {
  const [comments, setComments] = useState([]);

  function handleChange(newState) {
    apiService.comments.getComments(props.postId).then((response) => {
      setComments(response.data.comments);
    });
  }

  useEffect(() => {
    async function fetchComments() {
      apiService.comments.getComments(props.postId).then((response) => {
        setComments(response.data.comments);
      });
    }
    fetchComments();
  }, []);

  if (comments.length > 0) {
    return (
      <div>
        <MDBTypography tag="h6">Comment section</MDBTypography>
        <div className="commentSection">
          {comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <MDBTypography tag="h6" variant="h6">
                {comment.user.username}:
              </MDBTypography>
              <h6>{comment.content}</h6>
            </div>
          ))}
        </div>
        <CreateComment postId={props.postId} onChange={handleChange} />
      </div>
    );
  }
  return <CreateComment postId={props.postId} onChange={handleChange} />;
}

export default ViewComments;
