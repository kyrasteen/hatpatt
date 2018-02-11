import Immutable from 'seamless-immutable';
import * as actions from '../actions';

import authReducer from '../reducers/auth-reducer';

const initialState = Immutable({
  activeUserEmail: '',
  activeUserPassword: '',
  accounts: [{ email: 'example@gmail.com', password: 'password' }],
  isAuthenticated: false,
  authFailMessage: '',
});

describe('authentication reducer', () => {

  describe('updateActiveUserEmail', () => {
    it('should return state with updated email value', () => {
      const action = actions.updateActiveUserEmail('pizza');
      const updatedState = authReducer(initialState, action);
      expect(updatedState.activeUserEmail).toEqual('pizza');
    });
  });

  describe('updateActiveUserPassword', () => {
    it('should return state with updated password value', () => {
      const action = actions.updateActiveUserPassword('coffee');
      const updatedState = authReducer(initialState, action);
      expect(updatedState.activeUserPassword).toEqual('coffee');
    });
  });

  describe('validateCredentials', () => {
    it('should return state with isAuthenticated:true when credentials are valid', () => {
      const validUserState = initialState.merge({
        activeUserEmail: 'example@gmail.com',
        activeUserPassword: 'password'
      });
      const action = actions.validateCredentials();
      const updatedState = authReducer(validUserState, action);
      expect(updatedState.isAuthenticated).toEqual(true);
      expect(updatedState.authFailMessage).toEqual('');
    });
    it('should return state with authFailMessage when credentials are NOT valid', () => {
      const validUserState = initialState.merge({
        activeUserEmail: 'pizza@gmail.com',
        activeUserPassword: 'password'
      });
      const action = actions.validateCredentials();
      const updatedState = authReducer(validUserState, action);
      expect(updatedState.authFailMessage).toEqual('incorrect email or password');
      expect(updatedState.isAuthenticated).toEqual(false);
    });
  });
});