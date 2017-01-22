import React from 'react';
import {
    View,
    Navigator,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {
    _pressButton() {
       const { navigator } = this.props;
       if(navigator) {
          //出栈，返回到上一页
          navigator.pop();
       }
    }
    render() {
      return(
          <View style={styles.container}>
             <TouchableOpacity style={styles.button}
                onPress={this._pressButton.bind(this)}>
                  <Text style={{color:'white'}}>返回上一页</Text>
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
    backgroundColor: '#DEB887',
  },
  button:{
    width : 200,
    height : 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#707070',
  },
});
