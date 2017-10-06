import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    const { sectionStyle } = styles;
    return (
        <View style={sectionStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    sectionStyle: {
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection: 'row',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 8

    }
};

export { CardSection };