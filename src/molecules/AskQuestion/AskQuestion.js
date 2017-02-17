const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Button = require('../../atoms/Button');

require('./AskQuestion.scss');

const AskQuestion = (props) => (
  <div className={classnames("getsat-ask-question", props.className)} style={props.style}>
    <Button url={`${props.url}${encodeURIComponent(props.query)}`} text={props.text} className="getsat-ask-question__button" />
  </div>
);

AskQuestion.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  style: PropTypes.object,
  text: PropTypes.string,
  url: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired
};

AskQuestion.defaultProps = {
  text: 'Continue Creating Conversation'
};

module.exports = AskQuestion;
