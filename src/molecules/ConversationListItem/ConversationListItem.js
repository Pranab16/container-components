const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Link = require('spr-web-components/src/atoms/Link');
const Icon = require('spr-web-components/src/atoms/Icon');

const icons = {
  question: require('../../img/getsat-question.svg'),
  problem: require('../../img/getsat-problem.svg'),
  idea: require('../../img/getsat-idea.svg'),
  praise: require('../../img/getsat-praise.svg'),
  update: require('../../img/getsat-update.svg'),
  article: require('../../img/getsat-article.svg'),
};

require('./ConversationListItem.scss');

const ConversationListItem = (props) => (
  <div className={classnames("getsat-conversation-list-item", props.className)} style={props.style}>
    <div className="getsat-conversation-list-item__icon">
      <Icon icon={icons[props.topicType]} className="getsat-icon" />
    </div>
    <div className="getsat-conversation-list-item__title">
      <Link to={`/topics/${props.topicSlug}`}
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
  topicSlug: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  openInNewWindow: PropTypes.bool
};

ConversationListItem.defaultProps = {
  completed: false,
  openInNewWindow: true
};

module.exports = ConversationListItem;
