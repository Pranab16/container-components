const React = require('react');
const classnames = require('classnames');
import bemClassNames from 'bem-classnames';
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Link = require('../Link');

require('./Button.scss');

const buttonClasses = {
  name: 'spx-button',
  modifiers: ['type']
};

const Button = (props) => {
  const textStyle = props.textColor ? Object.assign({}, props.textStyle, { color: props.textColor }) : props.textStyle,
    bgStyle = props.bgColor ? Object.assign({}, props.style, { background: props.bgColor }) : props.style;

  const renderText = () => (
    <span className="spx-button__text" style={textStyle}>{props.text}</span>
  );

  if (props.url) {
    return(
      <Link className={bemClassNames(buttonClasses, {type: 'link'}, props.className)} href={props.url} style={bgStyle}>
        {renderText()}
      </Link>
    );
  }
  return (
    <button className={bemClassNames(buttonClasses, {type: 'button'}, props.className)} onClick={props.onClick} style={bgStyle}>
      {renderText()}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  style: PropTypes.object,
  componentName: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  textStyle: PropTypes.object,
  textColor: PropTypes.color,
  bgColor: PropTypes.color,
};

Button.propSettings = {
  classname: { display: false },
  style: { display: false },
  componentName: { display: false },
  text: { label: 'Label', isPrimary: true },
  url: { label: 'Redirect To' },
  textStyle: { display: false },
  textColor: { label: 'Text Color' },
  bgColor: { label: 'Background Color' },
};

Button.defaultProps = {
  text: 'Button',
};

module.exports = Button;
