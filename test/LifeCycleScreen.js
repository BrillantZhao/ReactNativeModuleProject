/**
 * Created by Administrator on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

/**
 * 一. 实例化阶段函数功能分析：
 *
 * 1. getDefaultProps：该函数用于初始化一些默认属性，通常会将固定的内容放在这个函数中进行初始化和赋值

 在组件中，我们可以利用 this.props 获取在这里初始化它的属性，由于组件初始化后，再次使用该组件不会调用 getDefaultProps 函数,
 所以组件自己不可以修改props，只可由其他组件调用它时在外部进行修改

 2. getInitialState：该函数用于对组件一些状态进行初始化

 该函数不同于getDefaultProps，在以后的过程中，会再次调用，所以可以将控制控件状态的一些变量放在这里初始化，比如控件上显示的文字，
 可以通过this.state来获取值，通过 this.setState 来修改state值

 注：一旦调用了 this.setState方法，组件一定会调用render方法，对组件进行再次渲染，不过，React框架会根据DOM的状态自动判断是否需要真正渲染

 3. componentWillMount：相当于OC中的 ViewWillAppear 方法,在组件简要被加载到视图之前调用，没有太多的功能

 4. render：它是每个组件必需具备的方法，本质上是个函数，并且返回JSX或者其他组件来构成DOM，和Android的XML布局类似

 在该函数中，只能通过this.state和this.props来访问之前在函数中初始化的数值
 注：只能返回一个顶级元素

 5. componentDidMount：在调用了render方法，组件加载成功并被成功渲染出来之后，所要执行的后续操作，一般都会在这个函数中进行，比如经常要面对的网络请求等加载数据操作

 因为UI已经成功渲染，而且这里面是异步的，索引放在这个函数进行数据的请求等复杂的操作，不会出现UI错误

 */

/**
 * 二. 存在阶段函数功能分析:
 *
 1. componentWillReceiveProps：指父元素对组件的props或state进行了修改
 2. shouldComponentUpadate：一般用于优化，可以返回false或true来控制是否进行渲染
 3. componentWillUpdate：组件刷新前调用，类似componentWillMount
 4. componentDidUpdate：更新后的hook
 */

/**
 * 三. 销毁阶段函数功能分析:
 *
 * 用于清理一些无用的内容，如：点击事件Listener,只有一个过程：componentWillUnmount
 */

/**
 * 四. 常用知识点分析
 *
 * this.state：开发中，组件肯定要与用户互动，React的一大创新就是将组件看成一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染UI
 *
 当用户点击组件，导致状态变化，this.setState方法就修改状态值，每次修改以后，会自动调用this.render方法，再次渲染组件
 可以把组件看成一个状态机，根据不同的status有不同的UI展示，只要使用setState改变状态值，根据diff算法算出有差值后，就会执行ReactDom的render方法，重新渲染页面
 注：由于this.props和this.state都用于描述组件的特性，可能会产生混淆，一个简单的区分方法就是 —— this.props表示那些一旦定义，就不再更改的特性，而this.state是会随着用户互动而产生改变的特性
 *
 * 获取真实的DOM节点

 在React Native中，组件并不是真实的DOM节点，而是存在于内存中的一种数据结构 ，叫虚拟DOM
 只有当它插入文档后，才会变成真实的DOM
 根据React的设计，所有DOM变动，都先在虚拟DOM上发生，然后再将实际发生变动的部分，反应在真实DOM上，这种算法叫做DOM diff,它可以极大提高网页的性能表现
 有时需要从组件获取真实DOM节点，这时就需要用到ref属性，可以看下面的示例加深理解

 */
var LifeCycleScreen = React.createClass({

    // 用于设置一些值固定不变或上下界面值传递
    getDefaultProps(){
        return {
            number1: 1,
            number2: 2
        }
    },

    // 用于设置一些可变或者用来刷新界面
    getInitialState(){
        return {
            isPositive: true,
            content: '5是不是负数',
            sum: 0
        }
    },

    render() {
        return (
            <View style={styles.container}>

                {/*1.*/}
                <Text style={styles.hello}>number1:{this.props.number1}</Text>
                <Text style={styles.hello}>number2:{this.props.number2}</Text>
                <Text style={styles.hello}>sum:{this.state.sum}</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({sum: this.props.number1 + this.props.number2})
                    }}
                >
                    <Text style={styles.hello}>计算和</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({sum: this.state.sum + 1})
                    }}
                >
                    <Text style={styles.hello}>和的基础上+1</Text>
                </TouchableOpacity>

                {/*2、*/}
                <TouchableOpacity
                    onPress={() => {
                        this.dealWithState(this.state.isPositive, 5)
                    }}
                >
                    <Text style={styles.hello}>{this.state.content}</Text>
                </TouchableOpacity>

                {/*2.*/}
                <TouchableOpacity
                    onPress={() => {
                        this.dealWithState()
                    }}
                >
                    <Text>值</Text>
                </TouchableOpacity>
                <TextInput ref="mytextInput"></TextInput>
            </View>
        );
    },

    dealWithState: function (data: Boolean, num: int) {
        var isPositive, content;

        if (num > 0) {
            isPositive = false;
            content = '值不是负数';
        } else {
            isPositive = true;
            content = '值是负数';
        }
        this.setState({
            isPositive: isPositive,
            content: content
        });
    },

    dealWithState: function () {
        // 让输入框获得焦点
        this.refs.mytextInput.focus();
        // 查看内容属性
        console.log(this.refs.mainView);
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 16,
        textAlign: 'center',
        margin: 5,
    },
});

module.exports = LifeCycleScreen;