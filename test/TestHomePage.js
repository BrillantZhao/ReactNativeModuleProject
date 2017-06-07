/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class TestHomePage extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        alert('点击了登录按钮')
                    }}
                >
                    {/* 登录按钮 */}
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 17, color: 'white'}}>测试页面</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        alert('点击了登录按钮')
                    }}
                >
                    {/* 登录按钮 */}
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 17, color: 'white'}}>项目页面</Text>
                    </View>
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
    loginButtonStyle: {
        // 尺寸
        width: width * 0.9,
        height: 44,
        // 背景色
        backgroundColor: 'green',
        // 上边距
        marginTop: 20,
        // 居中对齐
        justifyContent: 'center',
        alignItems: 'center'
    },
});

