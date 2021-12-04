import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../config';
import { getDatabase, ref, child, get } from "firebase";

var t = db.ref('isLikePressed/' + 'likePressed' + '/' );

export default class WelcomeScreen extends React.Component {
constructor(){
  super();
  this.state={
    likes:0,
    dislikes:0
  }
}
likecount=()=>{
  this.setState({likes:this.state.likes+1});
}
dislikecount=()=>{
  this.setState({dislikes:this.state.dislikes+1});
}

isLikedPressed(){
  var like = db.ref('isLikePressed/' + '/').update({
    likePressed:1,
  });
}
disLikedPressed(){
  var dislike = db.ref('disLikePressed/' + '/').update({
    dLikePressed: 1,
  });
}
  render(){
    return(
    <View>
      <AppHeader/>
      <TouchableOpacity style={[styles.button, {backgroundColor:'yellow'}]} onPress={() => this.props.navigation.navigate('AngryScreen')}>
      <Text style={styles.buttonText}>AngryScreen</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, {backgroundColor:'orange'}]} onPress={() => this.props.navigation.navigate('HappyScreen')}>
      <Text style={styles.buttonText}>HappyScreen</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={() => this.props.navigation.navigate('SadScreen')}>
      <Text style={styles.buttonText}>SadScreen</Text>
      </TouchableOpacity>
      

<Text style={[styles.buttonText,{marginLeft:120, marginTop:30}]}>Rate Us</Text>
      <TouchableOpacity style={{
        marginTop:20,
        marginLeft:110
      }} onPress={
        this.likecount
  }>
  <Text style={{
          fontSize:30,
      }}>{this.state.likes}</Text>
      <Text style={{
          fontSize:30
      }}>👍</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        marginTop:-75,
        marginLeft:200
      }} onPress={
        this.dislikecount
      } >
      <Text style={{
          fontSize:30
      }}>{this.state.dislikes}</Text>
      <Text style={{
          fontSize:30
      }}>👎</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  button:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:15,
    marginTop:50,
    width:200,
    height:50,
    textAlign:'center'
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold'
  }
})