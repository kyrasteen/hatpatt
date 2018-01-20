import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles, { variables } from '../styles';

const Home = class Home extends React.Component {
  render() {
    return (
      <View style={_styles.container}>
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

export default Home;
