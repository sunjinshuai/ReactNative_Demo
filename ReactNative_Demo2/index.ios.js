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
  View,
    NavigatorIOS,
    ScrollView
} from 'react-native';

// 导航栏
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>首页</Text>
            </View>
        );
    };
}

export default class ReactNative_Demo2 extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.flex} initialRoute={{
                component: Home,
                title: '首页',
                passProps: {},
            }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ReactNative_Demo2', () => ReactNative_Demo2);
