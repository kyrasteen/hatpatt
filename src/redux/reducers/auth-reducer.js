import { createReducer } from 'redux-act';
import Immutable from 'seamless-immutable';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { Vibration } from 'react-native';

import _ from 'lodash';

const initialState = Immutable({
  activeUserEmail: '',
  activeUserPassword: '',
  accounts: [{ email: 'example@gmail.com', password: 'password' }],
  isAuthenticated: false,
  authFailMessage: '',
});

// account with email already exists
const authReducer = createReducer(on => {
  on(actions.updateActiveUserEmail, (state, action) => {
    return state.set('activeUserEmail', action.value);
  });
  on(actions.updateActiveUserPassword, (state, action) => {
    return state.set('activeUserPassword', action.value);
  });
  on(actions.validateCredentials, (state, action) => {
    const email = state.activeUserEmail;
    const password = state.activeUserPassword;
    const accounts = state.accounts;
    const isAuthenticated = !!_.find(accounts, { email });
    if (isAuthenticated) {
      return state.set('isAuthenticated', isAuthenticated);
    } else {
      const message = 'incorrect email or password';
      // Vibration.vibrate(1000);
      return state.set('authFailMessage', message);
    }
  });
  on(actions.logoutUser, (state, action) => {
    return state.merge({ isAuthenticated: false, activeUserEmail: '', activeUserPassword: '' });
  });
}, initialState);

export default authReducer;
