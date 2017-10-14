import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { DUMBBELL, ACCOUNT_FILLED, CHAT_UNFILLED_DOUBLE, CHAT_FILLED_SQUARE } from '../images';

class TabIcon extends Component {

    iconPNG(title, style) {
        switch (title) {
            case "Today's Workout":
                return <Image source={DUMBBELL} style={style} />;
            case 'Chat':
                return <Image source={CHAT_FILLED_SQUARE} style={style} />;
            case 'Profile':
                return <Image source={ACCOUNT_FILLED} style={style} />;
            default:
                return;
        }
    }

    render() {
        const { viewStyle, iconStyle } = styles;
        return (
                <View>
                    {this.iconPNG(this.props.title, iconStyle)}
                </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#11ff11',
        height: 96,
        flex:1
    },
    iconStyle: {
        height: 48, 
        width: 48
    }
};

export default TabIcon;
