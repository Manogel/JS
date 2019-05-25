export const loginRequest = username => ({
  type: "LOGIN_REQUEST",
  params: { username }
});

export const loginSucess = username => ({
  type: "LOGIN_SUCESS",
  params: { username }
});

export const loginFailure = () => ({
  type: "LOGIN_FAIL"
});
