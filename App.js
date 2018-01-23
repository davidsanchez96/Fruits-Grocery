import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo';
import { GroceryApp } from './routes';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      'saira-bold': require('./src/assets/fonts/SairaCondensed-SemiBold.ttf'),
      'frederic-black': require('./src/assets/fonts/frederic-black.ttf'),
      'varelaround-regular': require('./src/assets/fonts/varelaround-regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <GroceryApp /> : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
