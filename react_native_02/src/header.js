/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

//참고 : jsx component를 return하므로 () => (이부분이 소괄호)

//"TouchableOpacity"
const Header = props => (
  <TouchableOpacity
    style={styles.header}
    onPress={() => alert('On Press')}
    //onLongPress={() => alert('on long press')}
    //onPressIn={() => alert('on press in')}
    //onPressOut={() => alert('on press out')}
  >
    <View style={styles.header}>
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

//"TouchableWithoutFeedback"
// const Header = props => (
//   <TouchableWithoutFeedback onPress={() => alert('hello world')}>
//     <View style={styles.header}>
//       <Text>{props.name}</Text>
//     </View>
//   </TouchableWithoutFeedback>
// );

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
