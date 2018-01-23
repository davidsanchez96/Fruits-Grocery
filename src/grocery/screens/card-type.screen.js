//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import Images from '../../assets/images';
import { Header } from '../../components';

// create a component
export class CardTypeScreen extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.onCardPressed = this.onCardPressed.bind(this);
  }

  state = {
    cardNamesList: ['amex', 'mastercard', 'visa']
  };

  onCardPressed = () => {
    this.props.navigation.navigate('CardNumber');
  };

  renderRow({ item }) {
    return (
      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={this.onCardPressed}
      >
        <Image
          source={Images[item]}
          style={{
            resizeMode: 'contain',
            marginBottom: 10
          }}
        />
      </TouchableOpacity>
    );
  }

  keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={styles.container}>
        <Header title="SELECT CARD" />
        <FlatList
          contentContainerStyle={{ marginTop: 10 }}
          data={this.state.cardNamesList}
          renderItem={this.renderRow}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </View>
    );
  }
}

// define your styles
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
