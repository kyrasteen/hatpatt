import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { Login, Home, Project } from '../../components';

const routeConfig = {
  home: { screen: Home, navigationOptions: { headerTitle: 'hattPatt', headerLeft: null } },
  login: { screen: Login, navigationOptions: { headerTitle: 'login', headerLeft: null } },
  project: { screen: Project, navigationOptions: { headerTitle: 'project', headerLeft: null } },
};

const AppNavigator = StackNavigator(routeConfig);
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('login'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export { AppNavigator };
export default navReducer;
