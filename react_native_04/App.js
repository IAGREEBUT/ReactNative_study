/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import PickerComponent from './src/picker';
import Superman from './assets/images/superman.jpg';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image
          source={{url: 'https://picsum.photos/id/237/200/300'}}
          style={styles.image}
          resizeMode="cover"
          onLoadEnd={() => alert('Image Loaded!!')}
        />
        {/*<PickerComponent></PickerComponent>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    backgroundColor: 'red',
  },
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
