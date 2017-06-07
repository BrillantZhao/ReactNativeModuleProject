/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

// ES6--引入外部文件
import TestHomePage from './test/TestHomePage';

export default class ReactNativeModuleProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    name: 'TestHomePage',
                    component: TestHomePage
                }}

                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeModuleProject', () => ReactNativeModuleProject);
