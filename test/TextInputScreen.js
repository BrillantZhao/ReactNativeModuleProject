/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class TextInputScreen extends React.Component {

    static navigationOptions = {
        title: 'TextInputScreen',//设置标题内容
    };

    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.textInputStyle}></TextInput>

                {/*Value：文本输入的默认值（注：如果设置了此属性，会造成无法输入的尴尬，一般会搭配JS动态设置）*/}
                <TextInput
                    style={styles.textInputStyle}
                    value="设置了Value"
                ></TextInput>

                {/*keyboardType：设置键盘类型（决定使用哪种键盘）*/}
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType="number-pad"
                ></TextInput>

                {/*multiline：如果值为真，文本输入可以输入多行，默认值为假*/}
                <TextInput
                    style={styles.textInputStyle}
                    multiline={true}
                ></TextInput>

                {/*password：如果值为真，文本输入框就成为一个密码区域，默认值为假*/}
                <TextInput
                    style={styles.textInputStyle}
                    password={true}
                ></TextInput>

                {/*placeholder：在文本输入之前提示用户文本框功能，也就是占位文字*/}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="请输入账号"
                ></TextInput>

                {/*placeholderTextColor：占位字符串的文本颜色*/}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="请输入账号"
                    placeholderTextColor="red"
                ></TextInput>

                {/* autoCapitalize：控制TextInput是否要自动将特定字符切换为大写
                 none：不自动使用任何东西
                 sentences：每个句子的首字母（默认）
                 words：每一个单词的首字母
                 characters：所有字符
                 */}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="none"
                    autoCapitalize="none"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="sentences"
                    autoCapitalize="sentences"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="words"
                    autoCapitalize="words"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="characters"
                    autoCapitalize="characters"
                ></TextInput>

                {/* autoCorrect：如果为false，会关闭拼写自动修正。默认值是true。 */}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="没有自动改正拼写"
                    autoCorrect={false}
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="自动改正拼写"
                    autoCorrect={true}
                ></TextInput>

                {/* autoFocus：如果为true，在componentDidMount后会获得焦点。默认值为false。 */}
                <TextInput
                    style={styles.textInputStyle}
                    autoFocus={true}
                ></TextInput>

                {/* clearButtonMode：清除按钮出现的时机

                 never：不出现
                 while-editing：编辑的时候出现
                 unless-editing：没有编辑时出现
                 always：总是出现
                 */}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="never"
                    clearButtonMode="never"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="while-editing"
                    clearButtonMode="while-editing"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="unless-editing"
                    clearButtonMode="unless-editing"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="always"
                    clearButtonMode="always"
                ></TextInput>

                {/* clearTextOnFocus：如果为true，每次开始输入的时候都会清除文本框的内容 */}
                <TextInput
                    style={styles.textInputStyle}
                    clearTextOnFocus={true}
                ></TextInput>

                {/* editable：如果值为假，文本是不可编辑，默认值为真 */}
                <TextInput
                    style={styles.textInputStyle}
                    editable={false}
                ></TextInput>

                {/* enablesReturnKeyAutomatically：如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。 */}
                <TextInput
                    style={styles.textInputStyle}
                    enablesReturnKeyAutomatically={true}
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    enablesReturnKeyAutomatically={false}
                ></TextInput>

                {/* returnKeyType：决定返回键的样式

                 default
                 go
                 google
                 join
                 next
                 route
                 search
                 send
                 yahoo
                 done
                 emergency-call */}
                <TextInput
                    style={styles.textInputStyle}
                    returnKeyType="go"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    returnKeyType="join"
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    returnKeyType="done"
                ></TextInput>

                {/* secureTextEntry：如果值为真，文本输入框就会使输入的文本变模糊，以便于像密码这样敏感的文本保持安全，类似 password 属性，默认值为假 */}
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType="number-pad"
                ></TextInput>

                {/* onChange：当文本框内容变化时调用此回调函数 */}
                <TextInput
                    style={styles.textInputStyle}
                    onChange={() => {
                        alert('文本框内容改变')
                    }}
                ></TextInput>

                {/* onChangeText：当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递 */}
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(Text) => {
                        alert('文字改变')
                    }}
                ></TextInput>

                {/* onFocus：当文本框获得焦点的时候调用此回调函数 */}
                <TextInput
                    style={styles.textInputStyle}
                    onFocus={() => {
                        alert('文本框获得焦点')
                    }}
                ></TextInput>

                {/* onBlur：当文本框失去焦点的时候调用此回调函数 */}
                <TextInput
                    style={styles.textInputStyle}
                    onBlur={() => {
                        alert('失去焦点')
                    }}
                ></TextInput>

                {/* onEndEditing：结束编辑时，调用回调函数 */}
                <TextInput
                    style={styles.textInputStyle}
                    onEndEditing={() => {
                        alert('结束文本编辑')
                    }}
                ></TextInput>
            </View>
        );
    }
}

// 样式
var styles = StyleSheet.create({
    container: {   //根View样式
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    textInputStyle: {
        // 设置尺寸
        width: width,
        height: 40,
        marginTop: 100,
        // 设置背景颜色
        backgroundColor: 'green'
    }
});

module.exports = TextInput;