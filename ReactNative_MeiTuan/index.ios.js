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
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

import Home from './component/Home';

export default class ReactNative_MeiTuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '首页',
            notifCount: 0,
            presses: 0,
        };
    }
    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="首页"
                    icon={require('./img/icon_tabbar_merchant_normal.png')}
                    selectedIcon={require('./img/icon_tabbar_merchant_selected.png')}
                    renderAsOriginal={true}
                    selected={this.state.selectedTab === '首页'}
                    onPress={() => {this.setState({selectedTab: '首页',});}}>
                    <NavigatorIOS style={styles.flex} initialRoute={{
                component: Home,
                title: '首页',
                passProps: {},
                rightButtonTitle:'购物车',
            }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    selected={this.state.selectedTab === '上门'}
                    onPress={() => {this.setState({selectedTab: '上门',});}}>
                    <NavigatorIOS style={styles.flex} initialRoute={{
                component: Home,
                title: '上门',
                passProps: {},
            }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="downloads"
                    selected={this.state.selectedTab === '商家'}
                    onPress={() => {this.setState({selectedTab: '商家',});}}>
                    <NavigatorIOS style={styles.flex} initialRoute={{
                component: Home,
                title: '商家',
                passProps: {},
            }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="favorites"
                    selected={this.state.selectedTab === '我的'}
                    onPress={() => {this.setState({selectedTab: '我的',});}}>
                    <NavigatorIOS style={styles.flex} initialRoute={{
                component: Home,
                title: '我的',
                passProps: {},
            }}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    pageView: {
        backgroundColor: '#fff',
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('ReactNative_MeiTuan', () => ReactNative_MeiTuan);
