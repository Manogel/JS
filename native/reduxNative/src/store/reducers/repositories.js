const initial_state = {
  data: [],
  loading: false,
  error: false
};

export default function repositories(state = initial_state, action) {
  switch (action.type) {
    case "REPO_REQUEST":
      return { ...state, loading: true };
    case "REPO_SUCESS":
      return { ...state, data:action.params.data, loading: false, error: false };
    case "REPO_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
