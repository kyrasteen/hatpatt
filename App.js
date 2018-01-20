import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducers';
import { AppNavigator } from './src/redux/reducers/nav-reducer';
import { addNavigationHelpers } from 'react-navigation';

class App extends React.Component {
  render() {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const Root = () => {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default Root;
