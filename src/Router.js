import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import WorkoutList from './components/WorkoutList';
import Profile from './components/Profile';
import TabIcon from './components/TabIcon';
import Chat from './components/Chat';

const RouterComponent = () => {
    const { navBarStyle, navBarTitle, tabBarStyle } = styles;
    return (
        <Router navigationBarStyle={navBarStyle} titleStyle={navBarTitle}>
            <Stack key='root' hideNavBar>
                <Scene key='auth' initial>
                    <Scene
                        key='login'
                        component={LoginForm}
                        title='Login / Sign-up'
                    />
                </Scene>
                <Scene 
                    key='clientArea' 
                    tabs
                    tabBarStyle={tabBarStyle}
                    showLabel={false}
                >
                    
                    <Scene
                        icon={TabIcon}
                        key='profile'
                        component={Profile}
                        title='Profile'
                    />
                    <Scene
                        key='workout'
                        icon={TabIcon}
                        component={WorkoutList}
                        title="Today's Workout"
                        initial
                    />
                    <Scene
                        icon={TabIcon}
                        key='chat'
                        component={Chat}
                        title='Chat'
                    />
                </Scene>
            </Stack>
        </Router>
    );
};

const styles = {
    navBarStyle: {
        backgroundColor: "#c1ffff",
        height: 60
    },
    navBarTitle:{
        color:'#aaa'
    },
    tabBarStyle: {
        backgroundColor: '#c1ffff',
        height: 60
    }
}

export default RouterComponent;


// Login Page
    // Sign In
        // Success -> Workout Page
        // Fail -> Clear Password
    // Sign Up
        // Email / Name / Phone
        // Choose Workout Program -> Workout Page

// Workout page
    // Program Title & Day number
    // show today's workout
    // Message / Results
    // Swipe to yesterdays/tomorrows workout

// Profile / Account
    // name
    // email
    // phone
    // workout program

// Messages / Chat
    // see old messages
    // create new message
    // *** icebox ***
        // share video

