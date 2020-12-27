import React, {Component} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';

import bg from '../../../res/profileBackground.jpg'

class Login extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={'transparent'} translucent={true}/>
        <Image source={bg}/>
      </View>
    );
  }
}

export default Login;
