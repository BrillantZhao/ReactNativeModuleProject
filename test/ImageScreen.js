/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
var Dimensions = require('Dimensions');
var imageAddress = 'http://qq.111cn.net/uploads/allimg/140712/22020H9C-22.jpg';

class ImageScreen extends React.Component {

    static navigationOptions = {
        title: 'ImageScreen',//设置标题内容
    };

    render() {
        return (
            /**
             * 1. 加载目录下面的静态图片( 目前问题是怎么加载不再js文件目录下面的图片)
             *
             * 2. 加载android或ios目录下的资源文件里面的图片(加载不成功)
             *
             * 3. 加载网络图片
             */
            <View style={styles.container}>

                <Image style={styles.imageStyle}
                       source={require('./icon.png')}/>

                {/*<Image style={styles.imageStyle}*/}
                {/*source={require('image!icon')}/>*/}

                <Image style={styles.imageStyle}
                       source={{uri: imageAddress}}/>

                <Image source={{uri: 'icon'}} style={styles.imageStyle}></Image>

                <Image source={{uri: 'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'}}
                       style={styles.bannerImgCoverStyle}></Image>

                <Image source={{uri: 'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'}}
                       style={styles.bannerImgContainStyle}></Image>

                <Image source={{uri: 'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'}}
                       style={styles.bannerImgStretchStyle}></Image>

                {/* 因为还没讲到listView,这边就用View代表Cell*/}
                <View style={styles.cellStyle}>
                    {/* 头像 */}
                    <Image source={require('./icon.png')} style={styles.imgStyle}></Image>
                    {/* 昵称 */}
                    <Text style={styles.nameStyle}>昵称</Text>
                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    {/* 头像 */}
                    <Image source={require('./icon.png')} style={styles.imgStyle}></Image>
                    {/* 昵称 */}
                    <Text style={styles.nameStyle}>昵称</Text>
                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    {/* 头像 */}
                    <Image source={require('./icon.png')} style={styles.imgStyle}></Image>
                    {/* 昵称 */}
                    <Text style={styles.nameStyle}>昵称</Text>
                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {   //根View样式
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    bannerImgCoverStyle: {
        // 设置背景颜色
        backgroundColor: 'green',
        // 设置宽度
        width: Dimensions.get('window').width,
        // 设置高度
        height: 150,
        // 设置图片填充模式
        // cover( 默认)：图片居中显示且不拉伸图片，超出的部分剪裁掉
        resizeMode: 'cover'
    },
    bannerImgContainStyle: {
        // 设置背景颜色
        backgroundColor: 'green',
        // 设置宽度
        width: Dimensions.get('window').width,
        // 设置高度
        height: 150,
        // 设置图片填充模式
        // contain：容器完全容纳图片，图片等比例进行拉伸
        resizeMode: 'contain'
    },
    bannerImgStretchStyle: {
        // 设置背景颜色
        backgroundColor: 'green',
        // 设置宽度
        width: Dimensions.get('window').width,
        // 设置高度
        height: 150,
        // 设置图片填充模式
        // stretch：图片被拉伸至与容器大小一致，可能会发生变形
        resizeMode: 'stretch'
    },
    cellStyle: {
        // 尺寸
        height: 44,
        width: Dimensions.get('window').width,
        // 设置背景颜色
        backgroundColor: 'white',
        // 设置主轴方向
        flexDirection: 'row',
        // 设置侧轴对齐方式
        alignItems: 'center'
    },
    imgStyle: {
        width: 30,
        height: 30,
        // 设置图片填充模式
        resizeMode: 'cover',
        // 设置圆角
        borderRadius: 15,
        // 设置图片位置
        marginLeft: 10
    },
    nameStyle: {
        // 设置昵称位置
        marginLeft: 10
    },
    lineStyle: {
        // 背景色
        backgroundColor: 'black',
        // 设置尺寸
        width: Dimensions.get('window').width,
        height: 1
    }
});

module.exports = ImageScreen;