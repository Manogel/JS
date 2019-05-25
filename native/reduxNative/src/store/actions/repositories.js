export const repoRequest = () => ({
  type: "REPO_REQUEST"
});

export const repoSucess = data => ({
  type: "REPO_SUCESS",
  params: { data }
});

export const repoFailure = () => ({
  type: "REPO_FAIL"
});
