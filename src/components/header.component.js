import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  Image
} from 'react-native';

export class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.unit} />
        <Text style={styles.headerTitle}>{this.props.title}</Text>
        <View style={styles.unit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF3EF'
  },
  unit: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'saira-bold',
    alignSelf: 'center',
    color: '#FFFFFF'
  },
  header: {
    backgroundColor: '#84E1A8',
    paddingBottom: 10,
    paddingTop: Platform.OS === 'ios' ? 44 : 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
