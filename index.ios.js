/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Image,
    Text,
    View
} from 'react-native';

import FirstPageComponent from './View/Day1/FirstPageComponent';

export default class ReactNative_Demo extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEB887',
    },
});

AppRegistry.registerComponent('ReactNative_Demo', () => ReactNative_Demo);
