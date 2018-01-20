import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Login, Profile, Home } from '../../components';

const routeConfig = {
  login: { screen: Login, navigationOptions: { headerTitle: 'login' } },
  home: { screen: Home, navigationOptions: { headerTitle: 'hattPatt' } },
};

const AppNavigator = StackNavigator(routeConfig);
// console.log(AppNavigator.router.getActionForPathAndParams('main'));
const initialState = AppNavigator.router.getStateForAction({ type: 'login' });

const navReducer = (state = initialState, action) => {
  // handle diff action types
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export { AppNavigator };
export default navReducer;
