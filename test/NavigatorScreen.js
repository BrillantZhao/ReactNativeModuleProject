/**
 * Created by Administrator on 2017/6/8.
 */

/**
 * 从0.44之后，Navigator改成了StackNavigator，所以这里面的使用需要调整
 */
import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

// 引入外部文件
var NaviagtorTemp = require('./NaviagtorTemp');

class NavigatorScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                {/* 实例化导航栏 */}
                <View style={styles.navBarStyle}>
                    {/* 左边按钮 */}
                    <TouchableOpacity
                        onPress={() => navigate('NaviagtorTemp')}
                    >
                        <Text style={styles.leftButtonTitleStyle}>按钮</Text>
                    </TouchableOpacity>

                    {/* 中间标题 */}
                    <Text style={styles.navBarTitleStyle}>标题</Text>

                    {/* 右边按钮 */}
                    <TouchableOpacity
                        onPress={() => {
                            alert('点击右边按钮');
                        }}
                    >
                        <Text style={styles.rightButtonTitleStyle}>按钮</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1
    },

    navBarStyle: {
        // 尺寸
        width: width,
        // 当前系统为iOS时,导航栏高度为64
        height: 44,
        // 背景颜色
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        // 底部分隔线
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        // 主轴方向
        flexDirection: 'row',
        // 对齐方式
        alignItems: 'center',
        justifyContent: 'space-between',
        // 当前系统为iOS时,下次移动15
        paddingTop: 0
    },

    leftButtonTitleStyle: {
        // 字体大小
        fontSize: 15,
        // 字体颜色
        color: 'blue',
        // 内边距
        paddingLeft: 8
    },

    navBarTitleStyle: {
        // 字体大小
        fontSize: 17,
        // 字体颜色
        color: 'black'
    },

    rightButtonTitleStyle: {
        // 字体大小
        fontSize: 15,
        // 字体颜色
        color: 'blue',
        // 内边距
        paddingRight: 8
    }
});

const SimpleApp = StackNavigator({
    NavigatorScreen: {screen: NavigatorScreen},
    NaviagtorTemp: {screen: NaviagtorTemp},
});

export default SimpleApp;