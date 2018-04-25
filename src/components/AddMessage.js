import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { CardSection, Input, Button, Card } from './common';

class AddMessage extends Component {

   onSubmitButtonPress() {
      console.log('Message Submitted');
   }

   render() {
      return (
         <Card>
            <CardSection>
               <Input
                  placeholder='Add message...'
               />
            </CardSection>
            <CardSection>
               <Button onPress={this.onSubmitButtonPress.bind(this)}>
                  Send
               </Button>
            </CardSection>
         </Card>
      );
   }
}

export default AddMessage;
