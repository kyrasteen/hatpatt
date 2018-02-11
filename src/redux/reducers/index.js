import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import Immutable from 'seamless-immutable';

import navReducer from './nav-reducer';
import authReducer from './auth-reducer';
import projectReducer from './project-reducer';

const reducer = combineReducers({
  nav: navReducer,
  authentication: authReducer,
  project: projectReducer,
});

export default reducer;
