import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { DUMBBELL, ACCOUNT_FILLED, CHAT_FILLED_SQUARE } from '../images';

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
        const { iconStyle } = styles;
        return (
                <View>
                    {this.iconPNG(this.props.title, iconStyle)}
                </View>
        );
    }
}

const styles = {
    iconStyle: {
        height: 48, 
        width: 48
    }
};

export default TabIcon;
