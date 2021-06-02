/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

class ModalComponent extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState({
      modal: this.state.modal ? false : true,
    });
  };

  render() {
    return (
      <View style={{width: '100%'}}>
        <Button title={'show modal'} onPress={this.handleModal} />

        <Modal visible={this.state.modal}>
          <View style={{marginTop: 50, backgroundColor: 'green'}}>
            <Text> This is modal content</Text>
          </View>
          <Button title={'close modal'} onPress={this.handleModal} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ModalComponent;
