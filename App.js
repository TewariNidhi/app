import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import WelcomeScreen from './screens/WelcomeScreen';
import AngryScreen from './screens/AngryScreen';
import SadScreen from './screens/SadScreen';

import HappyScreen from './screens/HappyScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  AngryScreen: AngryScreen,
  SadScreen: SadScreen,
 
  HappyScreen: HappyScreen,
});

const AppContainer = createAppContainer(AppNavigator);