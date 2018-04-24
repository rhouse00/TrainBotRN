import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { CardSection, Input } from './common';

class AddMessage extends Component {

   render() {
      return (
         <CardSection>
            <Input
               placeholder='Add message...'
            />
         </CardSection>
      );
   }
}

export default AddMessage;
