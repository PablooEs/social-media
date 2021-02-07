export function loginSession(data) {
  return {
    type: "LOG_IN",
    payload: data,
  };
}
