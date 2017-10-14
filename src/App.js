import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyA4PO7b2FwZriRNRFVjnDTTjVYh9rzhSAI",
            authDomain: "trainbotrn.firebaseapp.com",
            databaseURL: "https://trainbotrn.firebaseio.com",
            projectId: "trainbotrn",
            storageBucket: "trainbotrn.appspot.com",
            messagingSenderId: "689544885582"
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        const { mainPageStyle } = styles;

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

const styles = {
    mainPageStyle: {
        backgroundColor: "#f003aa",
        height: '100%'
    }
}

export default App;
