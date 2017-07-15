/**
 * Created by anhmantk on 7/15/17.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, Image} from 'react-native';

export default class SingerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleList: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            page: 1
        }
    }

    render() {
        return (
            <ListView
                pageSize={10}
                dataSource={this.state.singleList}
                renderRow={(row) => this.renderRow(row)}
            />
        )
    }

    renderRow(item) {
        return (
            <View style={styles.single}>
                <Image source={{uri: item.imageUrl}}
                       style={{width: 75, height: 75}} />
                <Text>{item.name}</Text>
            </View>
        )
    }

    componentDidMount() {
        let endpoint = `http://596992287dc6ce0011732fce.mockapi.io/single?page=${this.state.page}&limit=100`;
        console.log('enpoint: ' + endpoint);

        fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    singleList: this.state.singleList.cloneWithRows(responseJson)
                });
            })
            .catch((error) => {
                console.error(error);
            });


        console.log('====> componentDidMount');
    }


}
const styles = StyleSheet.create({
    single: {padding: 20, borderWidth: 1}
});