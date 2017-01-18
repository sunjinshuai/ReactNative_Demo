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
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    Animated,
    PropTypes,
    Alert,
    WebView,
    KeyboardAvoidingView,
    Modal,
    SegmentedControlIOS,
    Dimensions,
    ActivityIndicatorIOS
} from 'react-native';

import FirstPageComponent from './View/Day1/FirstPageComponent';
import Button from './src/component/Button';

const {width, height} = Dimensions.get('window');

class ReactNative_HelloWorld extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

class ReactNative_QQ extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                <Image style={styles.style_image}
                       source={require('./img/app_icon.png')}/>
                <TextInput style={styles.style_user_input}
                           placeholder='QQ号/手机号/邮箱'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                           textAlign='center'/>
                <View style={{height: 1, backgroundColor: '#f4f4f4'}}/>
                <TextInput style={styles.style_pwd_input}
                           placeholder='密码' numberOfLines={1}
                           underlineColorAndroid={'transparent'}
                           secureTextEntry={true}
                           textAlign='center'/>
                <View style={styles.style_view_commit}>
                    <Text style={{color: '#fff'}}> 登录 </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', bottom: 10}}>
                    <Text style={styles.style_view_unlogin}> 无法登录? </Text>
                    <Text style={styles.style_view_register}> 新用户 </Text>
                </View>
            </View>
        );
    }
}

class ReactNative_Image extends React.Component {
    render() {
        return (
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                   style={{width: 193, height: 110}}/>
        );
    }
}

// 自定义组件
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class ReactNative_Greeting extends React.Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='ReactNative'/>
                <Greeting name='Week'/>
                <Greeting name='iOS'/>
            </View>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class ReactNative_State extends React.Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        );
    }
}

class ReactNative_Styles extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

class ReactNative_HeightAndWidth extends React.Component {
    render() {
        return (
            // 指定宽高
            // <View>
            //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            //     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
            //     <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            // </View>
            // 弹性（Flex）宽高
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

class ReactNative_State1 extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

// 自定义Button
class ReactNative_Button extends React.Component {

    customPressHandle = () => {
        this.refs.button.disable();
        this.timer = setTimeout(
            () => {
                this.refs.button.enable();
            }, 3000
        );
    };

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button ref="button" text="提交" onPress={this.customPressHandle}/>
            </View>
        );
    }
}

// 从网络获取数据
class ReactNative_Fetch extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: ''
        };
    }

    customPressHandle = () => {
        fetch('http://bbs.reactnative.cn/api/category/3')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    title: responseJson.description,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.state.title}</Text>
                <Button ref="button" text="提交" onPress={this.customPressHandle}/>
            </View>
        );
    }
}

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

class ReactNative_NavigatorIOS extends React.Component {
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

// 动画
class ReactNative_Animation1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    render() {
        return (
            <Animated.Image
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
                    flex: 1,
                    transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                        {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                    ]
                }}
            />
        );
    }
    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // 开始执行动画
    }
}

class ReactNative_Animation2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    render() {
        return (
            <Animated.Image
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
                    flex: 1,
                    transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                        {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                    ]
                }}
            />
        );
    }
    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // 开始执行动画
    }
}

class MyScene extends Component {
    constructor(props) {
        super(props);
        this._onForward = this._onForward.bind(this);
    }

    _onForward() {
        this.props.navigator.push({
            title: 'Scene ' + nextIndex,
        });
    }

    render() {
        return (
            <View style={{marginTop: 64}}>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class ReactNative_NavigatorIOS1 extends React.Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MyScene,
                    title: 'My Initial Scene',
                }}
                style={{flex: 1}}
            />
        )
    }
}

class ReactNative_ScrollView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop:50}}>
                    进行测试ScrollView控件
                </Text>
                <ScrollView showsVerticalScrollIndicator={true}
                            contentContainerStyle={styles.contentContainer}>
                    <Text
                        style={{color:'#FFF',margin:5,fontSize:16,backgroundColor:"blue"}}>
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

class ReactNative_KeyboardAvoidingView extends React.Component {

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

export default class ReactNative_Demo extends React.Component {

    render() {
        return (
            <View >
                <Text style={styles.welcome}>
                    SegmentedControlIOS使用实例
                </Text>
                <View >
                    <SegmentedControlIOS
                        values={['全国', '北京']}
                        tintColor='red'
                        style={{margin:10,height:30,width:200,alignSelf:'center'}}/>

                    <SegmentedControlIOS
                        values={['Android', 'iOS','Java','React']}
                        tintColor='green'
                        selectedIndex={1}
                        onValueChange={(value)=> console.log('选中了'+value)}
                        style={{marginTop:20,margin:10,height:30,width:300,alignSelf:'center'}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#DEB887',
    // },
    // welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    //     color: 'red',
    // },
    // style_image: {
    //     borderRadius: 35,
    //     height: 70,
    //     width: 70,
    //     marginTop: 40,
    //     alignSelf: 'center',
    // },
    // style_user_input: {
    //     backgroundColor: '#fff',
    //     marginTop: 10,
    //     height: 35,
    // },
    // style_pwd_input: {
    //     backgroundColor: '#fff',
    //     height: 35,
    // },
    // style_view_commit: {
    //     marginTop: 15,
    //     marginLeft: 10,
    //     marginRight: 10,
    //     backgroundColor: '#63B8FF',
    //     height: 35,
    //     borderRadius: 5,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // style_view_unlogin: {
    //     fontSize: 12,
    //     color: '#63B8FF',
    //     marginLeft: 10,
    // },
    // style_view_register: {
    //     fontSize: 12,
    //     color: '#63B8FF',
    //     marginRight: 10,
    //     alignItems: 'flex-end',
    //     flex: 1,
    //     flexDirection: 'row',
    //     textAlign: 'right',
    // },
    // bigblue: {
    //     color: 'blue',
    //     fontWeight: 'bold',
    //     fontSize: 30,
    // },
    // red: {
    //     color: 'red',
    // },
    // flex: {
    //     flex: 1,
    // },
    // scrollViewTop: {
    //     marginTop: 20,
    // },
    // list_item: {
    //     color: '#333',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     marginLeft: 15,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#ddd',
    // },
    // detail_text: {
    //     textAlign: 'center',
    // }
    // container: {
    //     height:400,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    // },
    // contentContainer: {
    //     margin:10,
    //     backgroundColor:"#ff0000",
    // },
    // ### KeyboardAvoidingView
    // outerContainer: {
    //     height:height,
    //     paddingTop: 20,
    // },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    // },
    // textInput: {
    //     borderRadius: 5,
    //     borderWidth: 1,
    //     height: 44,
    //     paddingHorizontal: 10,
    // },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});

AppRegistry.registerComponent('ReactNative_Demo', () => ReactNative_Demo);
