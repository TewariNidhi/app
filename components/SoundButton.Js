import * as React from 'react';
import{Text,View,StyleSheet,Button,TouchablOpacity} from ' react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component{
    playSound = async () =>{
        console.log('playing');
    }
}