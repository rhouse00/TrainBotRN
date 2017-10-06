import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    const { onPress } = props;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#007aff',
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 8,
        marginRight: 8
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
}

export { Button };