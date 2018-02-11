import { createAction } from 'redux-act';

const AUTH_PREFIX = 'AUTH ->';
const PROJECT_PREFIX = 'PROJECT ->';

// auth
const updateActiveUserEmail = createAction(`${AUTH_PREFIX} update active user email`, value => ({
  value,
}));
const updateActiveUserPassword = createAction(`${AUTH_PREFIX} update active user password`, value => ({
  value,
}));
const validateCredentials = createAction(`${AUTH_PREFIX} validate credentials`);
const logoutUser = createAction(`${AUTH_PREFIX} logout`);

// project
const createProject = createAction(`${PROJECT_PREFIX} create`);
const updateProjectTitle = createAction(`${PROJECT_PREFIX} update title`, value => ({ value }));
const updateProjectNotes = createAction(`${PROJECT_PREFIX} update notes`, value => ({ value }));
const saveProject = createAction(`${PROJECT_PREFIX} save`, id => ({ id }));

export { 
  updateActiveUserEmail, updateActiveUserPassword, validateCredentials, logoutUser, 
  createProject, updateProjectTitle, updateProjectNotes, saveProject
 };
