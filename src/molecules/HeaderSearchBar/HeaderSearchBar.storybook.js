const React = require('react');
const { storiesOf, action } = require('@kadira/storybook');
const HeaderSearchBar = require('./HeaderSearchBar');

storiesOf('HeaderSearchBar', module)
  .add('default', () => (
    <HeaderSearchBar
      placeholder={'Which topics are you interested in?'}
      onSubmit={ action('option value changed') }
    />
  ));
