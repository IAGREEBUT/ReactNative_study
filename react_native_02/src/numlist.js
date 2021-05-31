/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const NumList = props => {
  return props.num.map((item, idx) => (
    <View style={styles.numlist}>
      <Text>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  numlist: {
    backgroundColor: '#bebebe',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
