import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/redux/reducers';
import { AppNavigator } from './src/redux/reducers/nav-reducer';
import { addNavigationHelpers } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Reactotron from 'reactotron-react-native';

import './reactotronConfig';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
  render() {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener })} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const Root = () => {
  const store = Reactotron.createStore(reducer, applyMiddleware(middleware));
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default Root;
