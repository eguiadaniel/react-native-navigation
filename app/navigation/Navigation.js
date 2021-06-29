import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Font-Awesome';

//ScreenStacks
import HomeScreenStack from './HomeStack';

const NavisgationStacks = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreenStack,
      navigationOptions: (tintColor) => ({
        drawerLabel: 'Inicio',
        drawerIcon: () => (
          <Icon name='home' size={24} style={{ color: tintColor }} />
        )
      })
    }
  },
  {
    drawerBackgroundColor: '#717171',
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'red',
      itemsContainerStyles: {
        marginVertical: 0
      }
    }
  }
);

export default createAppContainer(NavisgationStacks);
