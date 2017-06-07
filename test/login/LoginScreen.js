/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

// 常用参数
var iconWH = 70;
var passwordViewH = 50;
var passwordImageWH = 25;
var passwordMargin = 5;

// 视图
class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'LoginScreen',
    };

    render() {

        return (
            <View style={styles.container}>
                {/* 上部登录框 */}
                <View style={styles.loginViewStyle}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            alert('点击了头像')
                        }}
                    >
                        {/* 头像 */}
                        <Image source={{uri: 'icon'}} style={styles.iconStyle}></Image>
                    </TouchableOpacity>
                    {/* 账号 */}
                    <Text style={{fontSize: 16, margin: 10}}>12345</Text>
                    {/* 密码输入框 */}
                    <View style={styles.passwordViewStyle}>
                        {/* 左边图片 */}
                        <Image source={{uri: 'icon'}} style={styles.passwordImageStyle}></Image>
                        {/* 右边输入框 */}
                        <TextInput style={styles.passwordInputStyle}
                                   placeholder='请填写密码'
                        ></TextInput>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            alert('点击了登录按钮')
                        }}
                    >
                        {/* 登录按钮 */}
                        <View style={styles.loginButtonStyle}>
                            <Text style={{fontSize: 16, color: 'white'}}>登 录</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            alert('点击了忘记密码选项')
                        }}
                    >
                        {/* 忘记密码选项 */}
                        <Text style={{fontSize: 16, color: 'blue', marginTop: 15}}>登录遇到问题?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        alert('点击了更多')
                    }}
                >
                    {/* 下部更多登录方式 */}
                    <View style={styles.moreLoginViewStyle}>
                        <Text style={{color: 'blue', fontSize: 16}}>更多</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// 样式
var styles = StyleSheet.create({

    container: {
        flex: 1,
        // 背景色
        backgroundColor: 'white',
        // 对齐方式
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    loginViewStyle: {
        // 尺寸
        width: width * 0.9,
        // 上边距
        marginTop: 85,
        // 对齐方式
        alignItems: 'center'
    },

    iconStyle: {
        // 尺寸
        width: iconWH,
        height: iconWH
    },

    passwordViewStyle: {
        // 尺寸
        width: width * 0.9,
        height: passwordViewH,
        // 上边距
        marginTop: 20,
        // 主轴方向
        flexDirection: 'row',
        // 对齐方式
        alignItems: 'center',
        // 下边框
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    },

    passwordImageStyle: {
        // 尺寸
        width: passwordImageWH,
        height: passwordImageWH,
        // 图片填充方式
        resizeMode: 'contain',
        // 左边距
        marginLeft: passwordMargin
    },

    passwordInputStyle: {
        // 尺寸
        width: width * 0.9 - (passwordMargin * 3 + passwordImageWH),
        height: passwordViewH,
        // 左边距
        marginLeft: passwordMargin
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

    moreLoginViewStyle: {
        // 尺寸
        width: width * 0.9,
        height: 40,
        // 下边距
        marginBottom: 30,
        // 对齐方式
        alignItems: 'center',
        justifyContent: 'center'
    }
});

module.exports = LoginScreen;