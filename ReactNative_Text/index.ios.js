/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNative_Text extends Component {
  render() {
      return (
          <Text style={styles.outerText}>I am learning React Native!
            <Text style={styles.innerText}>Please study hard!
            </Text>
          </Text>
      );
  }
}

const styles = StyleSheet.create({
    outerText:{
        margin:40,
        textAlign:'center',
        color:'red',
        fontSize:28,
        fontFamily:'Cochin'
    },
    innerText: {
        color:'green',
        fontWeight:'bold',
    },
});

AppRegistry.registerComponent('ReactNative_Text', () => ReactNative_Text);
