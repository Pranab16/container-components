const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Button = require('spr-web-components/src/atoms/Button');

require('./AskQuestion.scss');

const AskQuestion = (props, { location, params }) => {
  const query = location && location.query.keyword ? location.query.keyword : '';

  return (
    <div className={classnames('getsat-ask-question', props.className)} style={props.style}>
      <Button url={`${props.url}${encodeURIComponent(query)}`} text={props.text} className="getsat-ask-question__button" />
    </div>
  )
};

AskQuestion.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  style: PropTypes.object,
  text: PropTypes.string,
  url: PropTypes.string.isRequired
};

AskQuestion.defaultProps = {
  text: 'Continue Creating Conversation'
};

AskQuestion.contextTypes = {
  location: PropTypes.object,
  params: PropTypes.object
};

module.exports = AskQuestion;
