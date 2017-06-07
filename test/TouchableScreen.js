/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

/**
 * Touchable 常用属性介绍

 Touchable 中包含两种触摸类别：       TouchableHighlight(高亮触摸)、TouchableOpacity(不透明触摸)
 TouchableHighlight(高亮触摸)：      当手指点下的时候，该视图的不透明度会进行降低同时会看到相应的颜色（原理：在底层新添加一个View）,需要注意的是TouchableHighlight只能进行一层嵌套，不能多层嵌套，如果需要多层嵌套就要用View包装
 activeOpacity：                     设置组件在进行触摸时候，显示的不透明度（取值：0 ~ 1）
 onHideUnderlay：                    当底层被隐藏的时候调用
 onShowUnderlay：                    当底层显示的时候调用
 style：                             可以设置控件的风格演示，该风格演示可以参考View组件的style
 underlayColor：                     当触摸或者点击控件的时候显示出的颜色
 TouchableWithoutFeedback：          这个属性说明了这个组件继承了所有TouchableWithoutFeedback的属性
 disabled：                          如果为true,则禁止此组件的一切交互
 hitSlop {top: number, left: number, bottom: number, right: number}：这一属性定义了按钮的外延范围。这一范围也会使pressRetentionOffset（见下文）变得更大。 注意：触摸范围不会超过父视图的边界，也不会影响原先和本组件层叠的视图（保留原先的触摸优先级）
 onLayout{nativeEvent: {layout: {x, y, width, height}}}：            当加载或者布局改变的时候被调用
 onLongPress：                       长按
 onPress：                           点击
 onPressIn：                         按住
 onPressOut：                        抬起
 pressRetentionOffset {top: number, left: number, bottom: number, right: number}：   在当前视图不能滚动的前提下指定这个属性，可以决定当手指移开多远距离之后，会不再激活按钮。但如果手指再次移回范围内，按钮会被再次激活。只要视图不能滚动，你可以来回多次这样的操作。确保你传入一个常量来减少内存分配
 TouchableOpacity(不透明触摸)：                                                       该组件封装了响应触摸事件，当点击按下的时候，该组件的透明度会降低
 activeOpacity：                                                                     设置当用户触摸的时候，组件的透明度（取值：0 ~ 1）
 TouchableWithoutFeedback：                                                          这个属性说明了这个组件继承了所有TouchableWithoutFeedback的属性
 disabled：                          如果为true,则禁止此组件的一切交互
 hitSlop {top: number, left: number, bottom: number, right: number}：        这一属性定义了按钮的外延范围。这一范围也会使pressRetentionOffset（见下文）变得更大。 注意：触摸范围不会超过父视图的边界，也不会影响原先和本组件层叠的视图（保留原先的触摸优先级）
 onLayout{nativeEvent: {layout: {x, y, width, height}}}：                    当加载或者布局改变的时候被调用
 */
class TouchableScreen extends React.Component {

    static navigationOptions = {
        title: 'FlexDirection',//设置标题内容
    };

    render() {

        return (

            <View>
                {/* 包装View */}
                <TouchableOpacity
                    onPress={() => {
                        alert('点击了View')
                    }}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableOpacity>
                {/* 包装Text */}
                <TouchableOpacity
                    onPress={() => {
                        alert('点击了Text')
                    }}
                >
                    <Text style={styles.testTextStyle}></Text>
                </TouchableOpacity>

                {/*常见的触摸事件演示*/}

                {/*TouchableHighlight（高亮触摸）-- 点击 */}
                <TouchableHighlight
                    onPress={() => {
                        alert('TouchableHighlight（高亮触摸）--点击')
                    }}
                    underlayColor={'red'}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableHighlight>

                {/* 按下 */}
                <TouchableHighlight
                    onPressIn={() => {
                        alert('TouchableHighlight（高亮触摸）--按下')
                    }}
                    underlayColor={'orange'}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableHighlight>

                {/* 抬起 */}
                <TouchableHighlight
                    onPressOut={() => {
                        alert('TouchableHighlight（高亮触摸）--抬起')
                    }}
                    underlayColor={'blue'}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableHighlight>

                {/* 长按 */}
                <TouchableHighlight
                    onLongPress={() => {
                        alert('TouchableHighlight（高亮触摸）--长按')
                    }}
                    underlayColor={'yellow'}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableHighlight>

                {/*TouchableOpacity（不透明触摸）-- 点击 */}
                <TouchableOpacity
                    onPress={() => {
                        alert('TouchableOpacity（不透明触摸）-- 点击')
                    }}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableOpacity>

                {/* 按下 */}
                <TouchableOpacity
                    onPressIn={() => {
                        alert('TouchableOpacity（不透明触摸）-- 按下')
                    }}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableOpacity>

                {/* 抬起 */}
                <TouchableOpacity
                    onPressOut={() => {
                        alert('TouchableOpacity（不透明触摸）-- 抬起')
                    }}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableOpacity>

                {/* 长按 */}
                <TouchableOpacity
                    onLongPress={() => {
                        alert('TouchableOpacity（不透明触摸）-- 长按')
                    }}
                >
                    <View style={styles.testViewStyle}></View>
                </TouchableOpacity>



            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    testViewStyle: {
        // 设置尺寸
        width: width,
        height: 40,
        marginTop: 20,
        // 设置背景颜色
        backgroundColor: 'red'
    },
    testTextStyle: {
        // 设置尺寸
        width: width,
        height: 40,
        marginTop: 20,
        // 设置背景颜色
        backgroundColor: 'yellow'
    }
});

module.exports = TouchableScreen;