/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    KeyboardAvoidingView,
    Modal,
    SegmentedControlIOS,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    Dimensions,
    ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class ReactNative_KeyboardAvoidingView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position' >
                <ScrollView style={styles.outerContainer}>
                    <View style={styles.container}>
                        <View style={{height:400,backgroundColor:'red',justifyContent:'center',alignItems:'center',}}>
                            <Text style={{fontSize:28,color:'#998462',textAlign:'center',}}>Top Area</Text>
                        </View>
                        <TextInput
                            placeholder="<TextInput />"
                            style={styles.textInput} />
                        <View style={{height:200,backgroundColor:'blue',justifyContent:'center',alignItems:'center',}}>
                            <Text style={{fontSize:28,color:'#998462',textAlign:'center',}}>Bottom Area</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        height:height,
        paddingTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
});

AppRegistry.registerComponent('ReactNative_KeyboardAvoidingView', () => ReactNative_KeyboardAvoidingView);
