//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions
} from 'react-native';
import { FruitList, Fruit } from '../../components';

const { width, height } = Dimensions.get('window');

// create a component
export class FruitsScreen extends Component {
  state = {
    dataObjects: [
      {
        title: 'Apple',
        description: 'Price $5'
      },
      {
        title: 'Banana',
        description: 'Price $10'
      },
      {
        title: 'Cherry',
        description: 'Price $10'
      },
      {
        title: 'Orange',
        description: 'Price $5'
      },
      {
        title: 'Strawberry',
        description: 'Price $10'
      },
      {
        title: 'Watermelon',
        description: 'Price $15'
      }
    ]
  };

  renderRow({ item }) {
    return <Fruit item={item} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>FRUITS GROCERY</Text>
        </View>
        <FruitList
          dataObjects={this.state.dataObjects}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 28,
    fontFamily: 'saira-bold',
    marginTop: Platform.OS === 'ios' ? 44 : 34,
    alignSelf: 'center',
    color: '#FFFFFF'
  },
  header: {
    backgroundColor: '#84E1A8',
    paddingBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#ECF3EF'
  }
});
