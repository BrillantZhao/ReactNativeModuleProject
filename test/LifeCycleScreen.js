/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class LifeCycleScreen extends React.Component {

    static navigationOptions = {
        title: 'LifeCycleScreen',//设置标题内容
    };

    // 用于设置一些值固定不变或上下界面值传递
    getDefaultProps() {
        return {
            number1: 1,
            number2: 2
        }
    }

    // 用于设置一些可变或者用来刷新界面
    getInitialState() {
        return {
            sum: 0
        }
    }

    render() {
        return (
            <View>
                <Text>number1:{this.props.number1}</Text>
                <Text>number2:{this.props.number2}</Text>
                <Text>sum:{this.state.sum}</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({sum: this.props.number1 + this.props.number2})
                    }}
                >
                    <Text>计算和</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({sum: this.state.sum + 1})
                    }}
                >
                    <Text>和的基础上+1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = LifeCycleScreen;