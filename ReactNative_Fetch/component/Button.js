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
        this.state = {
            disabled: false,
        };
    }
    onPress = () => {
        const { onPress } = this.props;
        onPress();
    };
    enable = () => {
        this.setState({
            disabled: false,
        });
    };
    disable = () => {
        this.setState({
            disabled: true,
        });
    };
    render() {
        const { text } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    disabled={this.state.disabled}
                    onPress={this.onPress}
                    style={[styles.button, this.state.disabled && styles.disabled]}>
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
    disabled: {
        backgroundColor: 'gray',
    },
});
