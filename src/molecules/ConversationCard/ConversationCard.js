const React = require('react');
const moment = require('moment');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const PostBalloon = require('spr-web-components/src/molecules/PostBalloon');

require('./ConversationCard.scss');

const ConversationCard = ({conversation}) => (
  <PostBalloon user={{...conversation.author, size: 64}}>
    <span className="conversation-card__author">{conversation.author.fullName}</span>
    <span className="conversation-card__created-at">{moment(conversation.createdAt).format(__('MMMM DD, YYYY'))}</span>
    <h3 className="conversation-card__title">{conversation.title}</h3>
    <p className="conversation-card__description" dangerouslySetInnerHTML={{ __html: conversation.description }}></p>
  </PostBalloon>
);

ConversationCard.propTypes = {
  conversation: PropTypes.object,
};

module.exports = ConversationCard;
