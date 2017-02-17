const React = require('react');
const { storiesOf, action } = require('@kadira/storybook');
const AskQuestion = require('./AskQuestion');

storiesOf('AskQuestion', module)
  .add('default', () => (
    <AskQuestion
      url='https://getsatisfaction.com/emerald_city/topics/new/add_details?topic[subject]='
      query='new topic'
    />
  ));
