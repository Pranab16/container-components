const React = require('react');
const moment = require('moment');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const PostBalloon = require('spr-web-components/src/molecules/PostBalloon');
const List = require('spr-web-components/src/molecules/List');
const CommentCard = require('../CommentCard');

require('./ReplyCard.scss');

const ReplyCard = (props) => (
  <div className="getsat-reply-card">
    <PostBalloon user={{...props.author, size: 64}}>
      <span className="getsat-reply-card__author">{props.author.fullName}</span>
      <span className="getsat-reply-card__created-at">{moment(props.createdAt).format(__('MMMM DD, YYYY'))}</span>
      <p className="getsat-reply-card__description" dangerouslySetInnerHTML={{ __html: props.description }}></p>
    </PostBalloon>

    <List
      listItemComponent={CommentCard}
      listItems={props.comments}
    />
  </div>
);

ReplyCard.propTypes = {
  createdAt: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.object,
  comments: PropTypes.array
};

module.exports = ReplyCard;
