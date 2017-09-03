/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

import Main from './Components/Main/Main';

export default class ReactNative_MeiTuan extends Component {
    render() {
        return (
            <Main />
        );
    }
}

AppRegistry.registerComponent('ReactNative_MeiTuan', () => ReactNative_MeiTuan);
