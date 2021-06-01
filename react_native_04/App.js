/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import PickerComponent from './src/picker';

class App extends Component {
  render() {
    return (
      <View>
        <PickerComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
