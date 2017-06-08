/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class ModelScreen extends React.Component {

    static navigationOptions = {
        title: 'ModelScreen',//设置标题内容
    };

    render() {
        return (
            <View>

            </View>
        );
    }
}

var ModelScreen = React.createClass({

    render(){
        return (
            <View style={styles.container}>
            </View>
        );
    }

});

// 样式
var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

module.exports = ModelScreen;