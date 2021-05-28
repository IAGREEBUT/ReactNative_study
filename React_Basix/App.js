/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  state = {
    sampleText: 'Hello world!',
    sampleBoolean: true,
    sampleNum: 1,
  };

  //boolean을 이용한 view상의 값 변경
  inputText = () =>
    this.state.sampleBoolean ? (
      <Text>sampleBoolean is true</Text>
    ) : (
      <Text>sampleBoolean is false</Text>
    );

  //event함수 setState를 이용하여 state값 변경하기
  changeState = () => {
    this.setState({sampleText: 'TEXT CHANGED!!!'});
  };

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1,
      };
    });
  };

  render() {
    return (
      <View style={styles.background}>
        <Text> setState </Text>
        <Text onPress={this.changeState}>{this.state.sampleText}</Text>
        <Text> 비동기성 </Text>
        <Text onPress={this.onAdd}>{this.state.sampleNum}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
