import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyA4PO7b2FwZriRNRFVjnDTTjVYh9rzhSAI',
            authDomain: 'trainbotrn.firebaseapp.com',
            databaseURL: 'https://trainbotrn.firebaseio.com',
            projectId: 'trainbotrn',
            storageBucket: 'trainbotrn.appspot.com',
            messagingSenderId: '689544885582'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
