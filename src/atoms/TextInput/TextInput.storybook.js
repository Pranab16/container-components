import React from 'react';
import TextInput from './TextInput';
import { storiesOf } from '@kadira/storybook';

const answerStyle = {
  fontSize: '20px',
};

storiesOf('TextInput', module)
  .add('default', () => (
    <TextInput
      properties={{answerStyle}}
    />
  ));
