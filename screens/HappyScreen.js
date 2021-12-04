import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,OnPress } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SoundButton from '../components/SoundButton';
import SoundButton2 from '../components/SoundButton2';
import WelcomeScreen from './WelcomeScreen'

export default class HappyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Happy Screen</Text>
        <SoundButton/>
        <SoundButton2/>
        <TouchableOpacity OnPress={this.AppNavigator} >
        <Text> back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
});
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,

  },
});
