/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Header from './src/header';

class App extends Component {
  state = {
    myTextInput: ' ',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '', //새로운 값을 항상 받기 위해 빈칸으로 초기화
        alphabet: [...prevState.alphabet, prevState.myTextInput], //이전 state의 myTextInput를 alphabet배열에 추가
      };
    });
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Button title={'Add Text Input'} onPress={this.onAddTextInput} />
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          mulitiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true}
        />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text style={styles.mainText} key={idx}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },
});

export default App;
