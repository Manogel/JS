// Reducer
const initial_state = {
  username: null,
  error: false,
  loading: false
};

export default function login(state = initial_state, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCESS":
      return {
        ...state,
        username: action.params.username,
        error: false,
        loading: false
      };
    case "LOGIN_FAIL":
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
