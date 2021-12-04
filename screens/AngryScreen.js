import React, { Component } from 'react';
import { Text,  View, StyleSheet,Button,Image } from 'react-native';



export default class AngryScreen extends Component {
  render(){
    return(
      <View style={{marginTop:200}} >
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
      <Image style={styles.logo}source={require('../assets/angry.png')}/>
<Image style={styles.logo}source={require('../assets/MAD.jpg')}/>
<Image style={styles.logo}source={require('../assets/pan.jpg')}/>
<Image style={styles.logo}source={require('../assets/peeve.jpg')}/>

    </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  logo: {
    height:390,
    width: 310,
    marginTop:0,
  }
});

