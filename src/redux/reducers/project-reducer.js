import { createReducer } from 'redux-act';
import Immutable from 'seamless-immutable';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { Vibration } from 'react-native';

import _ from 'lodash';

const initialState = Immutable({
  allProjects: [],
  projectsById: {},
  activeProject: {},
});

const projectReducer = createReducer(on => {
  on(actions.createProject, (state, action) => {
    const projectId = `p-${state.allProjects.length}`;
    return state.set('activeProject', { id: projectId });
  });
  on(actions.updateProjectTitle, (state, action) => {
    const activeProject = state.activeProject.merge({ title: action.value });
    return state.set('activeProject', activeProject);
  });
  on(actions.updateProjectNotes, (state, action) => {
    const activeProject = state.activeProject.merge({ notes: action.value });
    return state.set('activeProject', activeProject);
  });
  on(actions.saveProject, (state, action) => {
    const allProjects = state.allProjects.concat([state.activeProject]);
    const projectsById = state.projectsById.merge({ [action.id]: state.activeProject });
    return state.merge({ allProjects, projectsById });
  });
}, initialState);

export default projectReducer;
