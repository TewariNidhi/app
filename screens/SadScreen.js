import React, { Component } from 'react';
import { Text,  View, StyleSheet,Button,Image } from 'react-native';
import SoundButton from '../components/SoundButton'


export default class SadScreen extends Component {
  render(){
    return(
      <View style={{marginTop:200}} >
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
      <Image style={styles.logo}source={require ('../assets/sadd.jpg')}/>
                <Image style={styles.logo}source={require ('../assets/dank.jpg')}/>
                <Image style={styles.logo}source={require ('../assets/shoe.jpg')}/>
                <Image style={styles.logo}source={require ('../assets/office.jpg')}/>
                <Image style={styles.logo}source={require ('../assets/sad dog 3.jpg')}/>
                <Image style={styles.logo}source={require ('../assets/sad dog 2 (4).jpg')}/>
    </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  logo: {
    height:330,
    width: 320,
    marginTop:0,
  }
});