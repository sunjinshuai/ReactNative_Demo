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
    ScrollView,
    NavigatorIOS
} from 'react-native';

// 导航栏
class List extends Component {
    render() {
        return (
            <ScrollView style={[styles.flex, styles.scrollViewTop]}>
                <Text style={styles.list_item}>✨ 还有几天就放假了</Text>
                <Text style={styles.list_item}>✨ 回家去干啥呢</Text>
                <Text style={styles.list_item}>✨ 还是去撸代码去吧！</Text>
            </ScrollView>
        );
    };
}

export default class ReactNative_NavigatorIOS extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.flex} initialRoute={{
                component: List,
                title: '回家过年',
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

AppRegistry.registerComponent('ReactNative_NavigatorIOS', () => ReactNative_NavigatorIOS);
