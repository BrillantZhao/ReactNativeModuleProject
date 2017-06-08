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

class FlexDirection extends React.Component {

    static navigationOptions = {
        title: 'FlexDirection',//设置标题内容
    };

    render() {
        return (
            /**
             * FlexBox 常用容器属性
             *
             * 1. flexDirection（该属性决定了项目排列的方向，也就是主轴的方向）
             * row：             主轴为水平方向，起点在左端
             * row-reverse：     主轴为水平方向，起点在右端
             * column（默认）：   主轴为垂直方向，起点在上
             * column-reverse：  主轴为垂直方向，起点在下
             *
             * 2. justifyContent（定义伸缩项目在主轴线的对齐方式）
             * flex-start（默认）：伸缩项目向一行的起始位置靠齐
             * flex-end：        伸缩项目向一行的结束位置靠齐
             * center：          伸缩项目向一行的中间位置靠齐
             * space-between：   两端对齐，项目之间的间隔都相等
             * space-around：    伸缩项目会平均分布在行内，两端保留一半的空间
             *
             * 3. alignItems（定义项目在交叉轴上如何对齐，可以把它看成侧轴（垂直于主轴）的对齐方式）
             * flex-start（默认）：侧轴轴的起点对齐
             * flex-end
             * center：           侧轴的中点对齐
             * stretch（默认):     如果项目没有设置高度或设置为 auto，将占满整个容器高度
             *
             * 4. flexWrap（默认情况下，项目都排在一条轴线上，flex-wrap属性定义如果一条轴线排不下，如何换行）
             * nowrap（默认）：不换行
             * wrap：换行，第一行在上方
             *
             */

            /**
             * FlexBox 常用元素属性
             *
             * 1. flex（flex-grow、flex-shrink、flex-basis三个属性的缩写，第二个参数和第三个参数是可选参数）：默认值为 "0 1 auto"
             * 宽度 = 弹性宽度 * (flexGrow / sum(flexGorw))（重要）
             * 不管是否设置子项目的宽度，flex都会忽略宽度，按照上面的公式进行缩放，如果我们设置了高度，那么 flex 会遵循我们所设置的高度，不去进行拉伸，反之将会对高度进行拉伸
             *
             * 2. alignSelf（允许单个项目有与其它项目不一样的对齐方式，可覆盖 align-items属性）
             * auto(默认)：       继承父元素的alignItems属性，如果没有则切换为stretch
             * flex-start：      项目从侧轴的起点开始
             * flex-end：        项目从侧轴的终点开始
             * center：          项目以侧轴的中心为参照
             * stretch：
             */
            <View>
                <View style={styles.viewStyle}>

                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    viewStyle: {
        // 尺寸
        width: 300,
        height: 100,
        // 背景颜色
        backgroundColor: 'red',
        // 边框宽度
        borderWidth: 1,
        // 边框颜色
        borderColor: 'black'
    }

});

module.exports = FlexDirection;