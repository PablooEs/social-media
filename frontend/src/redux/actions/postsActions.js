export function getPosts(data) {
  return {
    type: "GET_POSTS",
    payload: data,
  };
}
