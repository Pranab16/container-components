const React = require('react');
const { storiesOf, action } = require('@kadira/storybook');
const ConversationListItem = require('./ConversationListItem');

storiesOf('ConversationListItem', module)
  .add('default', () => (
    <ConversationListItem
      title={'Which topics are you interested in?'}
      topicType="question"
      topicUrl="https://getsatisfaction.com"
    />
  ))
  .add('completed', () => (
    <ConversationListItem
      title={'Which topics are you interested in?'}
      topicType="problem"
      topicUrl="https://getsatisfaction.com"
      completed={true}
    />
  ));
