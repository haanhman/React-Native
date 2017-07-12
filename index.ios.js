/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

import AppIntro from 'react-native-app-intro'
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import SwiperScreen from './screen/SwiperScreen'

export class AppIntroScreen extends Component {
    constructor(props) {
        super(props);
    }

    onSkipBtnHandle = (index) => {
        const { navigate } = this.props.navigation;
        navigate('HomeScreen', {skip: 1, done: 0});
    }
    doneBtnHandle = () => {
        const { navigate } = this.props.navigation;
        navigate('HomeScreen', {skip: 0, done: 1});
    }
    nextBtnHandle = (index) => {
        console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }

    static navigationOptions = {
        header: null,
        title: 'App intro screen'
    }

    render() {
        const pageArray = [{
            title: 'Page 1',
            description: 'Description 1',
            img: require('./assets/logo2.jpg'),
            imgStyle: {
                height: 110 * 2.5,
                width: 110 * 2.5,
            },
            backgroundColor: '#fa931d',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 2',
            description: 'Description 2',
            img: require('./assets/logo1.png'),
            imgStyle: {
                height: 110 * 2.5,
                width: 110 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 3',
            description: 'Description 3',
            img: require('./assets/logo3.png'),
            imgStyle: {
                height: 110 * 2.5,
                width: 110 * 2.5,
            },
            backgroundColor: '#42f465',
            fontColor: '#fff',
            level: 10,
        }];

        return (
            <AppIntro
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
                pageArray={pageArray}
            />
        );
    }
}

const screens = StackNavigator({
    Home: { screen: AppIntroScreen },
    HomeScreen: { screen: HomeScreen },
    SwiperScreen: { screen: SwiperScreen },
});

AppRegistry.registerComponent('Swiper', () => screens);
