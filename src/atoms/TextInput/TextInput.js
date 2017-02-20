const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');
const classnames = require('classnames');
require('./textInput.scss');

const TextField = (props) => {
  const handleInputChange = (event) => {
    const value = event.currentTarget.value;
    props.onChange(value);
  };
  const classes = classnames('textInput__container', props.className);
  return (
    <div className={classes}>
      <input
        value={props.value}
        type={'text'}
        placeholder={props.placeholder}
        onChange={handleInputChange}
        style={props.properties.answerStyle}
      />
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  style: PropTypes.object,
  value: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  properties: PropTypes.object,
};

TextField.defaultProps = {
  properties: { answerStyle: {} }
}

module.exports = TextField;
