import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clientUpdate, clientSave, clientFetch } from '../actions';
import { CardSection, Button, Card } from './common';
import ClientForm from './ClientForm';

class ClientProfile extends Component {
    state = { editable: false };

    componentWillMount() {
        this.props.clientFetch();
        const client = this.props.client;
        this.updateFormFields(client);
    }

    componentWillReceiveProps(nextProps) {
        const client = nextProps.client;
        console.log('inside WILL\n', client);
        this.updateFormFields(client);
    }

    componentDidUpdate() {
        const client = this.props.client;
        this.updateFormFields(client);
    }

    onSubmitButtonPress() {
        const { name, email, phone } = this.props;
        // console.log('inside submit button \n', name, email, phone);
        console.log(this.props);
        this.props.clientSave({ name, email, phone });
        this.toggleEdit();
    }

    updateFormFields(client) {
        Object.keys(client).forEach((prop) => {
            const value = client[prop];
            this.props.clientUpdate({ prop, value });
        });
    }
    
    toggleEdit() {
        this.setState({ editable: !this.state.editable });
    }

    renderClientProfile() {
        return <ClientForm editable={this.state.editable} />;
     }

    renderButtons() {
        if (!this.state.editable) {
            return (
                <CardSection>
                    <Button onPress={this.toggleEdit.bind(this)}>
                        Edit?
                    </Button>
                </CardSection>
            );
        }
        return (
            <CardSection>
                <Button onPress={this.toggleEdit.bind(this)}>
                    Cancel
                </Button>
                <Button onPress={this.onSubmitButtonPress.bind(this)}>
                    Submit
                </Button>
            </CardSection>

        );
    }
  
    render() {
        return (
            <Card>
                {this.renderClientProfile()}
                {this.renderButtons()}
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, name, phone } = state.client;
    const { client } = state;
    return { email, name, phone, client };
};

export default connect(mapStateToProps, { clientUpdate, clientSave, clientFetch })(ClientProfile);
