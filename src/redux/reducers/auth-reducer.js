import { createReducer } from 'redux-act';
import Immutable from 'seamless-immutable';
import * as actions from '../actions';
import * as selectors from '../selectors';

import _ from 'lodash';

const initialState = Immutable({
  activeUserEmail: '',
  activeUserPassword: '',
  accounts: [{ email: 'example@gmail.com', password: 'password' }],
  isAuthenticated: false,
  authFailMessage: '',
});

// account with email already exists
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateActiveUserEmail':
      return state.set('activeUserEmail', action.value);
    case 'updateActiveUserPassword':
      return state.set('activeUserPassword', action.value);
    case 'validateCredentials':
      const email = state.activeUserEmail;
      const password = state.activeUserPassword;
      const accounts = state.accounts;
      const isAuthenticated = !!_.find(accounts, { email });
      if (isAuthenticated) {
        return state.set('isAuthenticated', isAuthenticated);
      } else {
        const message = 'incorrect email or password';
        return state.set('authFailMessage', message);
      }
    default:
      return state;
  }
};

// const credentialReducer = createReducer(on => {
//   on(actions.updateActiveUserEmail, (state, payload) => {
//     console.log('HIT');
//     // return state.set('activeUserEmail', '');
//   });
// }, initialState);

export default authReducer;
