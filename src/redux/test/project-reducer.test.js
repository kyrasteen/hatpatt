import Immutable from 'seamless-immutable';
import * as actions from '../actions';

import projectReducer from '../reducers/project-reducer';

const initialState = Immutable({
  allProjects: [],
  projectsById: {},
  activeProject: {},
});

describe('project reducer', () => {

  describe('createProject', () => {
    it('should return state with updated activeProject', () => {
      const action = actions.createProject();
      const updatedState = projectReducer(initialState, action);
      expect(updatedState.activeProject.id).toEqual('p-0');
    });
  });

  describe('updateProjectTitle', () => {
    it('should return state with updated activeProject title', () => {
      const action = actions.updateProjectTitle('pizza');
      const updatedState = projectReducer(initialState, action);
      expect(updatedState.activeProject.title).toEqual('pizza');
    });
  });

  describe('updateProjectNotes', () => {
    it('should return state with updated activeProject notes', () => {
      const action = actions.updateProjectNotes('pizza is good');
      const updatedState = projectReducer(initialState, action);
      expect(updatedState.activeProject.notes).toEqual('pizza is good');
    });
  });

  describe('saveProject', () => {
    it('should return state with activeProject in allProjects and projectsById', () => {
      const projectId = 'p-2';
      const projectState = initialState.merge({
        activeProject: {
          id: projectId,
          title: 'test'
        }
      });
      const action = actions.saveProject(projectId);
      const updatedState = projectReducer(projectState, action);
      expect(updatedState.allProjects[0]).toEqual(projectState.activeProject);
      expect(updatedState.projectsById[projectId]).toEqual(projectState.activeProject);
    });
  });
});