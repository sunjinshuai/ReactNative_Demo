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
    MapView,
} from 'react-native';

export default class ReactNative_MapView extends Component {
    render() {
        return (
            <MapView
                style={styles.map}
                onRegionChangeComplete={()=>{}}
                region={{
          latitude: 40.027737,
          longitude:116.403694,
          latitudeDelta: 1,
          longitudeDelta: 0.5,
        }}
                annotations={[{
          longitude: 116.403694,
          latitude: 40.027737,
          title: 'I am Here!',
        }]}
            />
        );
    }
}

const styles = StyleSheet.create({
    map: {
        marginTop:64,
        height: 350,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000000',
    }
});

AppRegistry.registerComponent('ReactNative_MapView', () => ReactNative_MapView);
