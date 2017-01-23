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
    ActivityIndicatorIOS,
} from 'react-native';

export default class ReactNative_ActivityIndicatorIOS extends Component {
    render() {
        return (
            <View >
                <Text style={styles.welcome}>
                    ActivityIndicatorIOS使用实例
                </Text>
                <Text style={{margin:10}}>自定义颜色指示器</Text>
                <View style={styles.horizontal}>
                    <ActivityIndicatorIOS color="#0000ff"/>
                    <ActivityIndicatorIOS color="#aa00aa"/>
                    <ActivityIndicatorIOS color="#aa3300"/>
                    <ActivityIndicatorIOS color="#00aa00"/>
                </View>
                <Text style={{margin:10}}>Large进度指示器</Text>
                <ActivityIndicatorIOS
                    style={[styles.centering,{margin:10}, {backgroundColor:'#cccccc'}, {height: 80}]}
                    color="white"
                    size="large"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    horizontal: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

AppRegistry.registerComponent('ReactNative_ActivityIndicatorIOS', () => ReactNative_ActivityIndicatorIOS);
