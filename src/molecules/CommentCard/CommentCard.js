const React = require('react');
const moment = require('moment');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const PostBalloon = require('spr-web-components/src/molecules/PostBalloon');

require('./CommentCard.scss');

const CommentCard = (props) => (
  <div className="getsat-comment-card">
    <PostBalloon user={{...props.author, size: 64}}>
      <span className="getsat-comment-card__author">{props.author.fullName}</span>
      <span className="getsat-comment-card__created-at">{moment(props.createdAt).format(__('MMMM DD, YYYY'))}</span>
      <p className="getsat-comment-card__description" dangerouslySetInnerHTML={{ __html: props.description }}></p>
    </PostBalloon>
  </div>
);

CommentCard.propTypes = {
  createdAt: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.object,
};

module.exports = CommentCard;
