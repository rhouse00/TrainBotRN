import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { clientUpdate } from '../actions';
import { CardSection, Input } from './common';

class ClientForm extends Component {

    render() {
        // const { editable } = this.props;
        const { name, phone, email, editable } = this.props;
        console.log(this.props);
        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jenny'
                        value={name}
                        onChangeText={value => this.props.clientUpdate({ prop: 'name', value })}
                        editable={editable}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='jennyjenny@g.com'
                        value={email}
                        onChangeText={value => this.props.clientUpdate({ prop: 'email', value })}
                        editable={editable}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-867-5309'
                        value={phone}
                        onChangeText={value => this.props.clientUpdate({ prop: 'phone', value })}
                        editable={editable}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Current Program'
                        placeholder='Powerlifting'
                        value={this.props.program}
                        onChangeText={value => this.props.clientUpdate({ prop: 'program', value })}
                        editable={editable}
                    />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, email, phone, program } = state.clientFormData;
    return { name, email, phone, program };
};

export default connect(mapStateToProps, { clientUpdate })(ClientForm);
