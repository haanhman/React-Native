/**
 * Created by anhmantk on 7/13/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'Home screen'
    }
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Text>Skip: {params.skip}</Text>
                <Text>Next: {params.done}</Text>
                <Button
                    onPress={() => navigate('Home')}
                    title="Back to App intro"
                />
                <Button
                    onPress={() => navigate('SwiperScreen')}
                    title="Swiper Screen"
                />
                <Button
                    onPress={() => navigate('SingerScreen')}
                    title="Single Screen"
                />
                <Button
                    onPress={() => navigate('ListViewEndReached')}
                    title="ListViewEndReached"
                />
            </View>
        );
    }
}