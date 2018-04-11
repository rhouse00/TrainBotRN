import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clientUpdate, clientSave, clientFetch } from '../actions';
import { CardSection, Button, Card } from './common';
import ClientForm from './ClientForm';

class ClientProfile extends Component {
    state = { editable: false };

    componentWillMount() {
        this.props.clientFetch();
        console.log();
    }

    componentWillReceiveProps(nextProps) {
        console.log('Will Receive Props', this.props);
        // this.setState({ nextProps });
    }
    componentDidUpdate() {
        console.log('Did Update\n', this.props);
        const client = this.props.client;
        // client.forEach((value, key) => {
        //     this.props.clientUpdate(key, value);
        // });

        Object.keys(client).forEach((prop) => {
            console.log(prop, client[prop]);
            console.log(this.props);
            const value = client[prop];
            this.props.clientUpdate({ prop, value });
        });
    }

    onSubmitButtonPress() {
        console.log('submit button press:\n', this.props);
        const { name, email, phone, program } = this.props;
        this.props.clientSave({ name, email, phone, program });
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
    console.log(state);
    return { email, name, phone, client };
    // const { name, email, phone, program } = state.clientFormData;
    // console.log(state);
    // return { name, email, phone, program };
};

export default connect(mapStateToProps, { clientUpdate, clientSave, clientFetch })(ClientProfile);
