/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//참고 : jsx component를 return하므로 () => (이부분이 소괄호)
const Header = props => (
  <View style={styles.header}>
    <Text>{props.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
