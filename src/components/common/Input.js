import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ onChangeText, label, value, placeholder, secureTextEntry, editable }) => {
    const { inputStyle, textLabelStyle, viewContainerStyle } = styles;
    return (
        <View style={viewContainerStyle}>
            <Text style={textLabelStyle}> {label} </Text>
            <TextInput 
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autocorrect={false}
                style={inputStyle}
                editable={editable}
                selectTextOnFocus
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        fontSize: 18,
        paddingLeft: 8,
        paddingRight: 8,
        color: '#000',
        flex: 2
    },
    textLabelStyle: {
        fontSize: 18,
        flex: 1
    },
    viewContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    }
};

export { Input };
