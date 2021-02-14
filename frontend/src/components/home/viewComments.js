import React, { useEffect, useState } from "react";
import apiService from "../../adapters/index";

function ViewComments(props) {
  const [comments, setComments] = useState([]);

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
        {comments.map((comment) => (
          <div key={comment._id}>
            <h5>{comment.user}</h5>
            <h6>{comment.content}</h6>
          </div>
        ))}
      </div>
    );
  }
  return "";
}

export default ViewComments;
