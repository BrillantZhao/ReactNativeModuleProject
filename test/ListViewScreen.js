/**
 * Created by Administrator on 2017/6/8.
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ListView
} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var newData = require('./LocalData.json');


// 视图
var ListViewScreen = React.createClass({

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return {
            // 将获得的数组传递给dataSource
            dataSource: ds.cloneWithRows(newData)
        }
    },

    render(){
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    // 返回一个Item
    renderRow(rowData){
        return (
            <View style={styles.itemStyle}>
                <Image source={{uri: rowData.img}} style={styles.imageStyle}/>
                <View style={styles.subItemStyle}>
                    <Text style={{marginTop: 5, fontSize: 17}}>{rowData.title}</Text>
                    <Text style={{marginBottom: 5, fontSize: 13, color: 'green'}}>简介</Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    itemStyle: {
        // 主轴方向
        flexDirection: 'row',
        // 下边框
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },

    imageStyle: {
        // 尺寸
        width: 60,
        height: 60,
        // 边距
        marginLeft: 10,
        margin: 10
    },

    subItemStyle: {
        // 对齐方式
        justifyContent: 'space-around'
    }
});

module.exports = ListViewScreen;