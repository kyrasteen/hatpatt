import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import { NavigationActions } from 'react-navigation';

import styles, { variables } from '../styles';

const Home = class Home extends React.Component {
  render() {
    return (
      <View style={_styles.container}>
        <Button title="logout" onPress={this.props.logoutUser} />
        <Text style={styles.header}>HatPatt</Text>
      </View>
    );
  }
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

mapStateToProps = state => ({});

mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(actions.logoutUser());
      dispatch(NavigationActions.navigate({ routeName: 'login' }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
