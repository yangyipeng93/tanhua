import React, {Component} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';

import bg from '../../../res/profileBackground.jpg';
import {pxToDp} from '../../../utils/stylesKits';
import {Input} from 'react-native-elements';

class Login extends Component {


  phoneNumberChangeText=()=>{

  }

  renderLogin = () => {
    // const {phoneNumber, phoneValid} = this.state;
    return <View>
      <View><Text style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>手机号登录注册</Text></View>
      <Input
        placeholder='请输入手机号码'
        maxLength={11}
        keyboardType={'phone-pad'}
        // value={phoneNumber}
        inputStyle={{ color: "#333" }}
        onChangeText={this.phoneNumberChangeText}
      >
      </Input>
    </View>;

  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor={'transparent'} translucent={true}/>
        <Image style={{width: '100%', height: pxToDp(220)}} source={require('../../../res/profileBackground.jpg')}/>
        {this.renderLogin()}
      </View>
    );
  }
}

export default Login;
