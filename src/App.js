import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component {
    render() {
        const store = createStore(reducers, {});
        const { mainPageStyle } = styles;
        return (
            <Provider store={store}>
                <View style={mainPageStyle}>
                    <LoginForm />
                </View>
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
