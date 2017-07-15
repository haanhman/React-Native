/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {StackNavigator} from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import SwiperScreen from './screen/SwiperScreen'
import AppIntroScreen from  './screen/AppIntroScreen'
import SingerScreen from './screen/SingerScreen'
import ListViewEndReached from './screen/ListViewEndReached'
const screens = StackNavigator({
    Home: {screen: AppIntroScreen},
    HomeScreen: {screen: HomeScreen},
    SwiperScreen: {screen: SwiperScreen},
    SingerScreen: {screen: SingerScreen},
    ListViewEndReached: {screen: ListViewEndReached}
});

// AppRegistry.registerComponent('Swiper', () => ListViewEndReached);
AppRegistry.registerComponent('Swiper', () => screens);
