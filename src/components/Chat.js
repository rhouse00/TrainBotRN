import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Chat extends Component {
    componentWillMount() {
        this.props.fetchMessages(); // need to create
    }

    render() {
        return (
            <View>
                <Text>
                    Onomatopoeia
                </Text>
            </View>
        );
    }
}

export default Chat;
