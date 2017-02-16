const React = require('react');
const Link = require('./Link');
const { storiesOf, action } = require('@kadira/storybook');

storiesOf('Link', module)
  .add('Default', () => (<Link to="google">Google</Link>))
  .add('with external link', () => (<Link href="https://google.com" target="_blank">Google</Link>))
  .add('click action', () => (<Link onClick={action('Link clicked')}>Click Action</Link>));
