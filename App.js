import React, {Component} from 'react';
import {View} from 'react-native';
import Nav from './src/pages/Nav';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Nav/>
      </View>
    );
  }
}

export default App;
