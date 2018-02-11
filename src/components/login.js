import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';
import { NavigationActions } from 'react-navigation';

import { StyleSheet, TextInput, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import styles, { variables } from '../styles';
import img from '../assets/img';

const Login = class Login extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
      this.props.navigateHome();
    }
  }

  render() {
    return (
      <View style={_styles.container}>
        <Image source={img.tempLogo} style={{ width:80, height: 80 }}/>
        <Text style={styles.header}>HatPatt</Text>
        <If condition={this.props.authFailMessage}>
          <Text style={styles.common.error}>{this.props.authFailMessage}</Text>
        </If>
        <Text style={styles.label}>email</Text>
        <TextInput style={styles.input} value={this.props.email} onChangeText={this.props.onEmailChange} autoFocus={true} keyboardType='email-address'/>
        <Text style={styles.label}>password</Text>
        <TextInput style={styles.input} value={this.props.password} onChangeText={this.props.onPasswordChange} />
        <TouchableOpacity onPress={this.props.onValidateCredentials}>
          <View style={styles.button}>
            <Text>login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.backgroundColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: variables.padding,
  },
});

Login.displayName = 'Login';
Login.propTypes = {};

const mapStateToProps = state => {
  return {
    email: selectors.getActiveUserEmail(state),
    password: selectors.getActiveUserPassword(state),
    isAuthenticated: selectors.getIsAuthenticated(state),
    authFailMessage: selectors.getAuthFailMessage(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEmailChange: value => {
      dispatch(actions.updateActiveUserEmail(value));
    },
    onPasswordChange: value => {
      dispatch(actions.updateActiveUserPassword(value));
    },
    onValidateCredentials: () => {
      dispatch(actions.validateCredentials());
    },
    navigateHome: () => {
      dispatch(NavigationActions.navigate({ routeName: 'home' }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
