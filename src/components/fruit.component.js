//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { Images } from 'utils';
import Dash from 'react-native-dash';

const { width, height } = Dimensions.get('window');

// create a component
export const Fruit = ({ item, onItemSelected }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <View style={styles.divider}>
        <Dash style={styles.dash} dashColor="#DADADA" />
        <View style={styles.halfCircleLeft} />
        <View style={styles.halfCircleRight} />
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={Images[item.title.toLowerCase()]} />
      </View>
      <View style={styles.priceSection}>
        <Text style={styles.price}>{item.description}</Text>
        <TouchableOpacity onPress={onItemSelected}>
          <View style={styles.addCart}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  plusText: {
    position: 'absolute',
    right: 15,
    color: 'white',
    fontSize: 30,
    bottom: 10,
    fontFamily: 'frederic-black',
    padding: 0,
    margin: 0
  },
  dash: { width: width, height: 1, position: 'absolute' },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  row: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 12,
    justifyContent: 'center',
    margin: 10,
    paddingTop: 10,
    borderRadius: 20
  },
  image: {
    width: null,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    fontFamily: 'frederic-black',
    alignSelf: 'center',
    color: '#3E4952',
    marginTop: 10
  },
  price: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'varelaround-regular',
    alignSelf: 'center',
    color: '#3E4952',
    marginLeft: 10,
    textAlign: 'center'
  },
  halfCircleLeft: {
    height: 20,
    width: 10,
    backgroundColor: '#ECF3EF',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  halfCircleRight: {
    height: 20,
    width: 10,
    backgroundColor: '#ECF3EF',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden'
  },
  imageWrapper: {
    marginHorizontal: 30,
    marginVertical: 10
  },
  addCart: {
    height: 60,
    width: 60,
    backgroundColor: '#ECF3EF',
    borderTopLeftRadius: 60,
    alignSelf: 'flex-end',
    backgroundColor: '#82DDAB',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 20
  },
  priceSection: {
    flex: 1,
    flexDirection: 'row'
  }
});
