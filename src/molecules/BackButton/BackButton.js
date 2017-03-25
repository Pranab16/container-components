const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Button = require('spr-web-components/src/atoms/Button');

require('./BackButton.scss');

const BackButton = (props, { params }) => {
  return (
    <div className={classnames('getsat-back-button', props.className)} style={props.style}>
      <Button url={`/launcher/${params.componentId}`} text={props.text} className="getsat-back-button__button" />
    </div>
  )
};

BackButton.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  text: PropTypes.string
};

BackButton.defaultProps = {
  text: 'Back to Popular Questions'
};

BackButton.contextTypes = {
  params: PropTypes.object
};

module.exports = BackButton;
