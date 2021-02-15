export function getComments(data) {
  return {
    type: "GET_COMMENTS",
    payload: data,
  };
}
