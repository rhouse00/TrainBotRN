import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { cardStyle } = styles;
    return (
        <View style={[cardStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    cardStyle: {
        marginTop: 36,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#aaa',
        shadowOpacity: 0.7,
        shadowOffset: { width: 0, height: 2 }
    }
};

export { Card };
