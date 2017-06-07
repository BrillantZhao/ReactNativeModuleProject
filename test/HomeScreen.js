/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen'
import FlexBoxScreen from './FlexBoxScreen'
import ImageScreen from './ImageScreen'
import TextInputScreen from './TextInputScreen'
import TouchableScreen from './TouchableScreen'
import LifeCycleScreen from './LifeCycleScreen'

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

/**
 * home页面
 */
class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome,HomeScreen',//设置标题内容
    };

    render() {  // render相当于初始化入口
        const {navigate} = this.props.navigation;
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
                    // navigate('Chat',{user:'Lucy'})} 意思说：跳转到Chat指的组件，并且带过去的参数key是user,value是Lucy
                    onPress={() => navigate('TestScreen')}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 17, color: 'white'}}>测试页面</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        alert('测试项目暂时未集成进来')
                    }}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 17, color: 'white'}}>项目页面</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

/**
 * 测试页面
 */
class TestScreen extends React.Component {

    static navigationOptions = {
        title: 'TestScreen',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <Text style={styles.instructions}>
                    从上一个页面传递过来的参数值：
                </Text>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigate('LoginScreen')}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 16, color: 'white'}}>登录页面基础布局</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigate('FlexBoxScreen')}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 16, color: 'white'}}>FlexBox介绍和使用</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigate('ImageScreen')}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 16, color: 'white'}}>常用组件Image使用</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigate('TextInputScreen')}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 16, color: 'white'}}>TextInput使用</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigate('TouchableScreen')}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 16, color: 'white'}}>Touchable 介绍与使用</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigate('LifeCycleScreen')}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{fontSize: 16, color: 'white'}}>生命周期</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({ // 样式类，const相当于var
    container: { // 样式
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

const SimpleApp = StackNavigator({
    HomeScreen: {screen: HomeScreen},
    TestScreen: {screen: TestScreen},
    LoginScreen: {screen: LoginScreen},
    FlexBoxScreen: {screen: FlexBoxScreen},
    ImageScreen: {screen: ImageScreen},
    TextInputScreen: {screen: TextInputScreen},
    TouchableScreen: {screen: TouchableScreen},
    LifeCycleScreen: {screen: LifeCycleScreen},
});

export default SimpleApp;