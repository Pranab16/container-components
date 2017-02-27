const React = require('react');
const { storiesOf, action } = require('@kadira/storybook');

const SignIn = require('./SignIn');

storiesOf('SignIn', module)
  .add('default', () => (
    <SignIn login={action('login')}/>
  ));
