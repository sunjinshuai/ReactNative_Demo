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
    View,
    TextInput,
    NavigatorIOS,
    TouchableOpacity
} from 'react-native';

export default class Button extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {status: 1};
    }

    customPressHandle = () => {
        // 自定义的方法,使用属性来定义
        alert('你按下了按钮，当前状态是' + this.state.status);
    };

    render() {
        const { text } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.customPressHandle} style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 100,
        borderRadius: 5,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
});
