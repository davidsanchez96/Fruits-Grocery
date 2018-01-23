import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  FruitsScreen,
  CardDateScreen,
  CardNumberScreen,
  CardTypeScreen,
  ConfirmationScreen
} from './src/grocery';
import { FontAwesome } from '@expo/vector-icons';

export const GroceryApp = TabNavigator(
  {
    Fruits: {
      screen: FruitsScreen
    },
    CardType: {
      screen: CardTypeScreen
    },
    CardNumber: {
      screen: CardNumberScreen
    },
    CardDate: {
      screen: CardDateScreen
    },
    Confirmation: {
      screen: ConfirmationScreen
    }
  },
  {
    initialRouteName: 'CardType',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#FFFFFF'
      }
    },
    ...TabNavigator.Presets.iOSBottomTabs,
    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        let iconName = 'square';
        return (
          <FontAwesome
            name={iconName}
            size={30}
            color={focused ? '#83DBB0' : '#EFEFEF'}
          />
        );
      }
    }
  }
);
