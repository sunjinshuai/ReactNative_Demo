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
    Switch,
    Picker,
    Slider
} from 'react-native';

export default class ReactNative_Demo3 extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOn: false,
            pickerLabel: '苹果',
            slideNum: 0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/*Switch*/}
                <Switch
                    onTintColor='blue'  //开启时的背景颜色
                    thumbTintColor='yellow' //开关上原形按钮的颜色
                    tintColor='black' //关闭时背景颜色
                    onValueChange={() => this.setState({isOn: !this.state.isOn})} //当状态值发生变化值回调
                    value={this.state.isOn == true}//默认状态
                />
                {/*Picker*/}
                <Picker style={{width:100,height:100}}
                        selectedValue = {this.state.pickerLabel}
                        onValueChange = {(e) => this.setState({pickerLabel:e})}>
                    <Picker.Item label="苹果" value="apple" />
                    <Picker.Item label="iPhone" value="手机" />
                    <Picker.Item label="苹果1" value="apple1" />
                    <Picker.Item label="iPhone1" value="手机1" />
                    <Picker.Item label="苹果2" value="apple2" />
                    <Picker.Item label="iPhone2" value="手机2" />
                    <Picker.Item label="苹果3" value="apple3" />
                    <Picker.Item label="iPhone3" value="手机3" />
                </Picker>
                {/*Slide*/}
                <Slider
                    minimumValue = {0} //最小之
                    maximumValue = {100} //最大值
                    step = {2} //步长,在minimumValue和maximumValue之间
                    maximumTrackTintColor = 'red' //滑道右侧的滑道颜色
                    minimumTrackTintColor = 'yellow' //滑道左侧的滑道颜色
                    onSlidingComplete = {(e)=>this.alert(e)} //停止滑动时调用,可以把当前值传过去
                    onValueChange = {(e)=>this.setState({slideNum:e})} //滑动时就调用,可以把当前值传过去
                    style={{marginTop:200,width:200}}
                />
                <Text>Slide当前值:{this.state.slideNum}</Text>
            </View>
        );
    }
    alert(e){
        alert(e);
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
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

AppRegistry.registerComponent('ReactNative_Demo3', () => ReactNative_Demo3);
