import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Navigator,
    TouchableOpacity
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {
    _pressButton() {
        let _this = this;
        const { navigator } = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent
            });
        }
    }

    render() {
        return(
           <View style={styles.container}>
                <TouchableOpacity  style={styles.button}
                onPress={this._pressButton.bind(this)}>
                   <Text style={{color:'white'}}>跳转到下一页面</Text>
                </TouchableOpacity>
            </View>
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
  button:{
    width : 200,
    height : 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#707070',
  },
});
