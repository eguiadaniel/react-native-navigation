import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector/FontAwesome';
import HomeScreen from './../screens/Home';

const leftIcon = (navigation, icon) => {
  <Icon
    name={icon}
    style={{ marginLeft: 20 }}
    size={20}
    color='#000'
    onPress={() => navigation.openDrawer()}
  />;
};

const HomeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: () => leftIcon(navigation, 'bars')
    })
  }
});

export default HomeScreenStack;
