const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Link = require('../../atoms/Link');

require('./ConversationListItem.scss');
require('../../img/getsat-question.svg');
require('../../img/getsat-problem.svg');
require('../../img/getsat-idea.svg');
require('../../img/getsat-praise.svg');
require('../../img/getsat-update.svg');
require('../../img/getsat-article.svg');

const ConversationListItem = (props) => (
  <div className={classnames("getsat-conversation-list-item", props.className)}>
    <div className="getsat-conversation-list-item__icon">
      <svg role="icon" className={`getsat-icon getsat-conversation-list-item__icon--${props.topicType}`}>
        <use xlinkHref={`#icon-getsat-${props.topicType}`}/>
      </svg>
    </div>
    <div className="getsat-conversation-list-item__title">
      <Link href={props.topicUrl}
        target={props.openInNewWindow ? '_blank' : '_top'}>{props.title}</Link>
    </div>
    {props.completed &&
      <div className="getsat-conversation-list-item__completed"></div>
    }
  </div>
);

ConversationListItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  style: PropTypes.object,
  title: PropTypes.string,
  topicType: PropTypes.string,
  topicUrl: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  openInNewWindow: PropTypes.bool
};

ConversationListItem.defaultProps = {
  completed: false,
  openInNewWindow: true
};

module.exports = ConversationListItem;
