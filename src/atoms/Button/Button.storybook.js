import React from 'react';
import Button from './Button';
import { storiesOf, action } from '@kadira/storybook';

const style = {
  minWidth: '40px',
  paddingLeft: '10px',
  paddingRight: '10px',
};

storiesOf('Button', module)
  .add('with no styles', () => (
    <Button
      style={style}
      text="Ok"
    />
  ))
  .add('with different bg Color', () => (
    <Button
      style={Object.assign({}, style)}
      bgColor="blue"
      text="Ok"
    />
  ))
  .add('with different text Color', () => (
    <Button
      style={Object.assign({}, style)}
      textColor="grey"
      text="Ok"
    />
  ))
  .add('with overriding text Color', () => (
    <Button
      style={Object.assign({}, style, { color: 'red' })}
      textColor="green"
      text="Ok"
    />
  ))
  .add('with overriding bg Color', () => (
    <Button
      style={Object.assign({}, style, { color: 'red', background: 'black' })}
      bgColor="white"
      text="Ok"
    />
  ))
  .add('with link', () => (
    <Button
      style={style}
      url="https://www.google.com"
      text="Google"
    />
  ))
  .add('without link', () => (
    <Button
      style={style}
      text="Confirm"
    />
  ))
  .add('with long name', () => (
    <Button
      style={style}
      text="Confirm if true as this is getting long"
    />
  ))
  .add('with larger min width', () => (
    <Button
      style={Object.assign({}, style, { width: '120px' })}
      text="Ok"
    />
  ))
  .add('with click action', () => (
    <Button
      style={style}
      text="Click here"
      onClick={action('Button clicked')}
    />
  ));
