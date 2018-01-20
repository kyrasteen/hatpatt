const updateActiveUserEmail = value => ({
  type: 'updateActiveUserEmail',
  value,
});

const updateActiveUserPassword = value => ({
  type: 'updateActiveUserPassword',
  value,
});

const validateCredentials = () => ({
  type: 'validateCredentials',
});

export { updateActiveUserEmail, updateActiveUserPassword, validateCredentials };
