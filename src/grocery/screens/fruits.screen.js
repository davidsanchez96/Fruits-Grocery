//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FruitList, Fruit, IconBadge } from 'components';

const { width, height } = Dimensions.get('window');

// create a component
export class FruitsScreen extends Component {
  state = {
    total: 0,
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

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.onItemSelected = this.onItemSelected.bind(this);
    this.onShopCartPressed = this.onShopCartPressed.bind(this);
  }

  renderRow({ item }) {
    return <Fruit item={item} onItemSelected={this.onItemSelected} />;
  }

  keyExtractor = (item, index) => index;

  onItemSelected = () => {
    const { total } = this.state;
    let value = total + 1;
    this.setState({ total: value });
  };

  oneScreensWorth = 20;

  onShopCartPressed = () => {
    this.props.navigation.navigate('CardType');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.unit} />
          <Text style={styles.headerTitle}>FRUITS GROCERY</Text>
          <View style={styles.unit}>
            <TouchableOpacity onPress={this.onShopCartPressed}>
              <View style={styles.icon}>
                <Ionicons name="md-cart" size={30} color="white" />
                <View style={styles.iconBadge}>
                  <Text style={{ color: '#FFF' }}>{this.state.total}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={this.state.dataObjects}
          renderItem={this.renderRow}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
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
  },
  container: {
    flex: 1,
    backgroundColor: '#ECF3EF'
  },
  icon: {
    borderRadius: 25,
    height: 45,
    width: 45,
    backgroundColor: '#84E1A8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBadge: {
    position: 'absolute',
    top: 1,
    right: 1,
    minWidth: 22,
    height: 22,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000'
  }
});
