/**
 * Created by anhmantk on 7/15/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Alert,
    RefreshControl,
    StatusBar
} from 'react-native';

export default class ListViewEndReached extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleList: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            page: 1,
            isRefresh: false
        }
    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    hidden={true}
                />
                <ListView
                    refreshControl={
                    <RefreshControl
                     refreshing={this.state.isRefresh}
                     onRefresh={this._onRefresh.bind(this)}
                    />
                }
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={10}
                    pageSize={10}
                    dataSource={this.state.singleList}
                    renderRow={(row) => this.renderRow(row)}
                />
            </View>
        )
    }

    _onRefresh() {
        console.log('====> _onRefresh');
    }

    _onEndReached() {
        console.log('==> _onEndReached');
        this.setState({
            page: this.state.page + 1
        })
        let endpoint = `http://596992287dc6ce0011732fce.mockapi.io/single?page=${this.state.page}&limit=10`;
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
                if (responseJson.length > 0) {
                    data = data.concat(responseJson);
                    this.setState({
                        singleList: this.state.singleList.cloneWithRows(data)
                    });
                } else {
                    Alert.alert(
                        'Thong bao',
                        'Het du lieu roi',
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')}
                        ]
                    )
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderRow(item) {
        return (
            <View style={styles.single}>
                <Image source={{uri: item.imageUrl}}
                       style={{width: 75, height: 75}}/>
                <Text>{item.name}</Text>
            </View>
        )
    }

    componentDidMount() {
        let endpoint = `http://596992287dc6ce0011732fce.mockapi.io/single?page=${this.state.page}&limit=10`;
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
                data = responseJson;
                this.setState({
                    singleList: this.state.singleList.cloneWithRows(data)
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