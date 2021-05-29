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
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>hello world1</Text>
        </View>
        <View style={styles.subView}>
          <Text>hello world2</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text>hello world3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    alignItems: 'center' /* 수직정렬 */,
    justifyContent: 'center', //수평정
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '50%',
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
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20,
  },
});

export default App;
