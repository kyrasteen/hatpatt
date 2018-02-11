const getAuthState = state => state.authentication;
const getProjectState = state => state.project;

// authentication
const getActiveUserEmail = state => {
  return getAuthState(state).activeUserEmail;
};
const getActiveUserPassword = state => {
  return getAuthState(state).activeUserPassword;
};
const getAccounts = state => {
  return getAuthState(state).accounts;
};
const getIsAuthenticated = state => {
  return getAuthState(state).isAuthenticated;
};
const getAuthFailMessage = state => {
  return getAuthState(state).authFailMessage;
};

// project
const getActiveProject = state => {
  return getProjectState(state).activeProject;
};

export {
  getAuthState,
  getActiveUserEmail,
  getActiveUserPassword,
  getAccounts,
  getIsAuthenticated,
  getAuthFailMessage,
  getActiveProject,
};
