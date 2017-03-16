const React = require('react');
const classnames = require('classnames');
const moment = require('moment');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Link = require('spr-web-components/src/atoms/Link');
const Icon = require('spr-web-components/src/atoms/Icon');

const UserAvatar = require('spr-web-components/src/molecules/UserAvatar');

require('./ConversationListItem.scss');

const ConversationListItem = (props) => (
  <div className={classnames("getsat-conversation-list-item", props.className)} style={props.style}>
    <div className="getsat-conversation-list-item__title">
      <Link href={props.topicUrl} target={props.openInNewWindow ? '_blank' : '_top'}>{props.title}</Link>
    </div>
    <p className="getsat-conversation-list-item__description" dangerouslySetInnerHTML={{ __html: props.description }}></p>

    <div className="getsat-conversation-list-item__footer">
      <UserAvatar className="getsat-conversation-list-item__footer__author-image" size="20" shape="circle" {...props.author} />
      <span className="getsat-conversation-list-item__footer__author-name">{props.author.fullName}</span>
      <span className="getsat-conversation-list-item__footer__separator">.</span>
      <span className="getsat-conversation-list-item__footer__created-at">{moment(props.createdAt).fromNow()}</span>
    </div>
  </div>
);

ConversationListItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  style: PropTypes.object,
  topicUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.object,
  createdAt: PropTypes.string,
  openInNewWindow: PropTypes.bool
};

ConversationListItem.defaultProps = {
  completed: false,
  openInNewWindow: true
};

module.exports = ConversationListItem;
