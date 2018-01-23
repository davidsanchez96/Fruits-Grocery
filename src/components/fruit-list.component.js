//import liraries
import React, { Component } from 'react';
import { FlatList } from 'react-native';

// create a component
export class FruitList extends Component {
  keyExtractor = (item, index) => index;

  oneScreensWorth = 20;

  render() {
    return (
      <FlatList
        data={this.props.dataObjects}
        renderItem={this.props.renderRow}
        numColumns={2}
        keyExtractor={this.keyExtractor}
        initialNumToRender={this.oneScreensWorth}
      />
    );
  }
}
