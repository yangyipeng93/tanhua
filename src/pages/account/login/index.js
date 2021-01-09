import React, {Component} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';

import bg from '../../../res/profileBackground.jpg';
import {pxToDp} from '../../../utils/stylesKits';
import {Input} from 'react-native-elements';
import validator from '../../../utils/validator';

class Login extends Component {

  state = {
    // 手机号码
    phoneNumber: '13526860457',
    // 手机号码是否合法
    phoneValid: true,
    // 是否显示登录页面
    showLogin: true,
    // 验证码输入框的值
    vcodeTxt: '',
    // 倒计时按钮的文本
    btnText: '重新获取',
    // 是否在倒计时中
    isCountDowning: false,
  };

  // 登录框手机号码输入
  phoneNumberChangeText = (phoneNumber) => {
    this.setState({ phoneNumber });
  }


  phoneNumberSubmitEditing = () => {
    /*
    1 对手机号码的合法性做校验 -  正则
       1 不通过  提示
    2 将手机号码发送到后台对应接口 -> 获取验证码  axios
      1 发送异步请求的时候 自动的显示等待框
      2 请求回来  等待框  自动隐藏
      3 关键
        1 等待框 ?
        2 自动 ? -> axios的 拦截器
    3 将登录页面切换成 填写验证码的界面
    4 开启定时器
     */

    const {phoneNumber}=this.state;
    const phoneValid=validator.validatePhone(phoneNumber);
    console.log(phoneValid);
    if (!phoneValid){
      this.setState({phoneValid});
      return;
    }

  };

  renderLogin = () => {
    const {phoneNumber, phoneValid} = this.state;
    return <View>
      <View><Text style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>手机号登录注册</Text></View>
      <Input
        placeholder='请输入手机号码'
        maxLength={11}
        keyboardType={'phone-pad'}
        value={phoneNumber}
        inputStyle={{color: '#333'}}
        onChangeText={this.phoneNumberChangeText}
        onSubmitEditing={this.phoneNumberSubmitEditing}
        errorMessage={phoneValid ? '' : '手机号码格式不正确'}

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
