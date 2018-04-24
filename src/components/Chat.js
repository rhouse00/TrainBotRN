import React, { Component } from 'react';
import { View } from 'react-native';
import ChatMessage from './ChatMessage';
import AddMessage from './AddMessage';

class Chat extends Component {
    componentWillMount() {
        // this.props.fetchMessages(); // need to create
    }

    render() {
        return (
            <View>
                <ChatMessage />
                <AddMessage />
            </View>
        );
    }
}

export default Chat;
