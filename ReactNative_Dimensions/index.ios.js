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
    Dimensions
} from 'react-native';

export default class ReactNative_Dimensions extends Component {
    render() {
        return (
            <View>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //充满全屏
        justifyContent: 'center', //主轴对齐方式
        alignItems: 'center', //侧轴对齐方式
        backgroundColor: '#F5FCFF', //背景色
    },
});

AppRegistry.registerComponent('ReactNative_Dimensions', () => ReactNative_Dimensions);
