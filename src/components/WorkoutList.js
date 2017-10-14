import React, { Component } from 'react';
import { ListView, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { workoutsFetch } from '../actions';
import ListItem from './ListItem';

class WorkoutList extends Component {
    componentWillMount() {
        this.props.workoutsFetch();
    }
    keyExtractor= (item, index) => item.day;

    render() {
        return (
            <FlatList
                data={this.props.workouts}
                keyExtractor={this.keyExtractor}
                renderItem={({item}) => <ListItem workout={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            />
        );
    }
};

const mapStateToProps = state => {
    const workouts = Object.keys(state.workouts).map(day => ({ day, ...state.workouts[day] }));
    return { workouts };
}

export default connect(mapStateToProps, { workoutsFetch })(WorkoutList);
