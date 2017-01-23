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
    TouchableHighlight,
    DatePickerIOS
} from 'react-native';

export default class ReactNative_DatePickerIOS extends Component {
    render() {
        return (
            <View style={styles.container}>

              <DatePickerIOS date={new Date()} mode="time"/>

            </View>
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
    datePickerContainer: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
    },
});

AppRegistry.registerComponent('ReactNative_DatePickerIOS', () => ReactNative_DatePickerIOS);
