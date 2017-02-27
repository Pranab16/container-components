const React = require('react');
const { storiesOf, action } = require('@kadira/storybook');

const SignInContainer = require('./SignInContainer');

storiesOf('SignInContainer', module)
  .add('default', () => (
    <SignInContainer />
  ));
