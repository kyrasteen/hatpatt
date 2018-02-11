import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';

import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';
import { NavigationActions } from 'react-navigation';

import styles, { variables } from '../styles';

const Project = class Project extends React.Component {
  render() {
    return (
      <View style={_styles.container}>
        <Text style={styles.header}>{this.props.project.title}</Text>
        <Text style={styles.label}>project title</Text>
        <TextInput style={styles.input} value={this.props.project.title} onChangeText={this.props.onTitleChange} />
        <Text style={styles.label}>project notes</Text>
        <TextInput style={styles.input} multiline={true} numberOfLines={10} value={this.props.project.notes} onChangeText={this.props.onNotesChange} />
        <Button title="save" onPress={this.props.saveProject} />
      </View>
    );
  }
};

Project.displayName = 'Project';
Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    notes: PropTypes.string
  })
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.backgroundColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

mapStateToProps = state => {
  return {
    project: selectors.getActiveProject(state),
  };
};

mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTitleChange: value => {
      dispatch(actions.updateProjectTitle(value));
    },
    onNotesChange: value => {
      dispatch(actions.updateProjectNotes(value));
    },
    saveProject: () => {
      dispatch(actions.saveProject(ownProps.id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
