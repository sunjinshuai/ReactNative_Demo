/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Navigator
} from 'react-native';

import FirstPageComponent from './View/Day1/FirstPageComponent';

export default class ReactNative_Demo extends React.Component {
   render() {

       let defaultName = 'FirstPageName';
       let defaultComponent = FirstPageComponent;

       return (
         <Navigator
               initialRoute={{ name: defaultName, component: defaultComponent }}
               configureScene={(route) => {
               return Navigator.SceneConfigs.FloatFromRight;
           }}
           renderScene={(route, navigator) => {
               let Component = route.component;
               return <Component {...route.params} navigator={navigator} />
         }}/>
       );
     }
}

AppRegistry.registerComponent('ReactNative_Demo', () => ReactNative_Demo);
