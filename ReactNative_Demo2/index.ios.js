/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    ScrollView,
    TabBarIOS
} from 'react-native';

import Home from './Component/Home';
import History from './Component/History';
import Favorites from './Component/Favorites';
import Downloads from './Component/Downloads';

export default class ReactNative_Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '历史',
            notifCount: 0,
            presses: 0,
        };
    }
    render() {
        return (
            <TabBarIOS tintColor='orange'>
              <TabBarIOS.Item
                  systemIcon="bookmarks"
                  selected={this.state.selectedTab === '自定义'}
                  onPress={() => {this.setState({selectedTab: '自定义',});}}>
                <NavigatorIOS style={styles.flex} initialRoute={{
                component: Home,
                title: '首页',
                passProps: {},
            }}/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  systemIcon="history"
                  selected={this.state.selectedTab === '历史'}
                  onPress={() => {this.setState({selectedTab: '历史',});}}>
                <NavigatorIOS style={styles.flex} initialRoute={{
                component: History,
                title: '历史',
                passProps: {},
            }}/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  systemIcon="downloads"
                  selected={this.state.selectedTab === '下载'}
                  onPress={() => {this.setState({selectedTab: '下载',});}}>
                <NavigatorIOS style={styles.flex} initialRoute={{
                component: Downloads,
                title: '下载',
                passProps: {},
            }}/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  systemIcon="favorites"
                  selected={this.state.selectedTab === '喜欢'}
                  onPress={() => {this.setState({selectedTab: '喜欢',});}}>
                <NavigatorIOS style={styles.flex} initialRoute={{
                component: Favorites,
                title: '喜欢',
                passProps: {},
            }}/>
              </TabBarIOS.Item>
            </TabBarIOS>
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

AppRegistry.registerComponent('ReactNative_Demo2', () => ReactNative_Demo2);
