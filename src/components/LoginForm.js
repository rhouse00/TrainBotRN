import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { emailChanged, passwordChanged, loginClientPending } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginClientPending({ email, password });
    }

    
    render() {
        const { overrideCardStyle } = styles;
        return (
            <Card style={overrideCardStyle}>
                <CardSection>
                    <Input
                    label='email'
                    placeholder='ryan@email.com'
                    secureTextEntry={false}
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    label='password'
                    placeholder='not123password'
                    secureTextEntry
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Sign-In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    overrideCardStyle: {
        marginTop: 120,
        height: 'auto'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
    return {
        email,
        password
    };
};

export default connect(mapStateToProps, { 
        emailChanged, 
        passwordChanged, 
        loginClientPending 
    })(LoginForm);
