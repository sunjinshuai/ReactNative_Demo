/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>首页</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

//输出类
module.exports = Home;
