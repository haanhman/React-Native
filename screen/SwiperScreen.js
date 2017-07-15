/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import Swiper from 'react-native-swiper'

export default class SwiperScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'Home screen'
    }
    render() {
        return (
        <View>
            <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
                hidden={true}
            />
            <Swiper
                style={styles.wrapper}
                loop={false}
                showsButtons={true}
                nextButton={<Text></Text>}
                prevButton={<Text></Text>}
            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})