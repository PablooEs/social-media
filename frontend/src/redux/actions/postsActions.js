export function getPosts(data) {
  return {
    type: "GET_POSTS",
    payload: data,
  };
}

export function getUserPosts(data) {
  return {
    type: "GET_USER_POSTS",
    payload: data,
  };
}
