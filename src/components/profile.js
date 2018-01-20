import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Profile = class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    letterSpacing: 3,
  },
});

export default Profile;
