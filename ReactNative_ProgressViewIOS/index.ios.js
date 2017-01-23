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
    ProgressViewIOS
} from 'react-native';

export default class ReactNative_ProgressViewIOS extends Component {
    render() {
        return (
            <View>
                <Text style={styles.welcome}>ProgressViewIOS使用实例</Text>
                <ProgressViewIOS style={styles.progressView} progress={0.3}/>
                <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={0.2}/>
                <ProgressViewIOS style={styles.progressView} progressTintColor='red' trackTintColor='black'
                                 progress={0.4}/>
                <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={0.6}/>
                <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={0.8}/>
                <ProgressViewIOS style={styles.progressView} progressTintColor='red' progressViewStyle='bar'
                                 progress={0.5}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    progressView: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    }
});

AppRegistry.registerComponent('ReactNative_ProgressViewIOS', () => ReactNative_ProgressViewIOS);
