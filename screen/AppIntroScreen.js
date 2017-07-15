/**
 * Created by anhmantk on 7/15/17.
 */
import React, { Component } from 'react';
import AppIntro from 'react-native-app-intro'

export default class AppIntroScreen extends Component {
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
            img: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t31.0-8/s960x960/19983879_1644942538850774_4293195890942344514_o.jpg?oh=a4f93a0812c98d7eb79bfdc6876b13ee&oe=59FC2F00',
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
            img: 'http://img.f30.vnecdn.net/2017/07/10/thuthiem2renders151020140200-1-1353-7489-1499699372_500x300.jpg',
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
            img: require('../assets/logo3.png'),
            imgStyle: {
                height: 110 * 2.5,
                width: 110 * 2.5,
            },
            backgroundColor: '#42f465',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 4',
            description: 'Description 4',
            img: 'http://img.f29.vnecdn.net/2017/07/15/honda-accord-2-4976-1500086539.jpg',
            imgStyle: {
                height: 110 * 2.5,
                width: 110 * 2.5,
            },
            backgroundColor: '#666666',
            fontColor: '#ff6666',
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