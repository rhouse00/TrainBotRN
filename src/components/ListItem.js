import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from '../components/common';


class ListItem extends Component {
    
    renderText(style) {
        const { day, ...items } = this.props.workout;
        return Object.keys(items).map((item, index) => {
            return (
                <Text style={style} key={index}>
                    {items[item]}
                </Text>
            );
        });
    }

    render() {
        const { day } = this.props.workout;
        const { 
            cardOverrideStyle, 
            dayContainerStyle, 
            dayHeaderStyle, 
            workoutContainerStyle, 
            workoutTextStyle 
        } = styles;

        return (
            <Card style={cardOverrideStyle} >

                <CardSection >
                    <View style={dayContainerStyle}>
                        <Text style={dayHeaderStyle}>
                            {day.toUpperCase()}
                        </Text>
                    </View>
                </CardSection>

                <CardSection>
                    <View style={workoutContainerStyle}>
                        {this.renderText(workoutTextStyle)}
                    </View>
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    cardOverrideStyle: {
        height: 'auto',
        width: 360
    },
    dayContainerStyle: {
        width: '100%',
        backgroundColor: 'orange'
    },
    workoutContainerStyle: {
        flex: 1,
        height: '100%'
    },
    dayHeaderStyle: {
        fontSize: 24
    },
    workoutTextStyle: {
        fontSize: 18
    }
};

export default ListItem;
