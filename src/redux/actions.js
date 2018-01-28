import { createAction } from 'redux-act';

const AUTH_PREFIX = 'AUTH ->';

const updateActiveUserEmail = createAction(`${AUTH_PREFIX} update active user email`, value => ({
  value,
}));

const updateActiveUserPassword = createAction(`${AUTH_PREFIX} update active user password`, value => ({
  value,
}));

const validateCredentials = createAction(`${AUTH_PREFIX} validate credentials`);

const logoutUser = createAction(`${AUTH_PREFIX} logout`);

export { updateActiveUserEmail, updateActiveUserPassword, validateCredentials, logoutUser };
