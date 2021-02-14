import React, { useEffect, useState } from "react";
import { MDBTypography, MDBBox } from "mdbreact";
import apiService from "../../adapters/index";

function ViewComments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      apiService.comments.getComments(props.postId).then((response) => {
        setComments(response.data.comments);
        //console.log(response.data.comments);
      });
    }
    fetchComments();
  }, []);

  if (comments.length > 0) {
    console.log(comments);
    return (
      <div className="commentSection">
        {comments.map((comment) => (
          <div key={comment._id}>
            <MDBTypography tag="h6" variant="h6">
              {comment.user.username}
            </MDBTypography>
            <h6>{comment.content}</h6>
          </div>
        ))}
      </div>
    );
  }
  return "";
}

export default ViewComments;
