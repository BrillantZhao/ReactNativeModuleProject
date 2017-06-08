/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class NaviagtorTemp extends React.Component {

    static navigationOptions = {
        title: 'NaviagtorTemp',//设置标题内容
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

module.exports = NaviagtorTemp;