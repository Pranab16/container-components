const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');
const classnames = require('classnames');

require('./textInput.scss');

const TextInput = (props) => {
  const handleInputChange = (event) => {
    const value = event.currentTarget.value;
    props.onChange(value);
  };

  return (
    <form action="javascript:void(0);" className={classnames('textInput__container', props.className)}>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleInputChange}
        onKeyPress={props.onKeyPress}
        style={props.properties.answerStyle}
      />
    </form>
  );
};

TextInput.propTypes = {
  className: PropTypes.className,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  properties: PropTypes.object,
};

TextInput.defaultProps = {
  type: 'text',
  properties: {answerStyle: {}},
};

module.exports = TextInput;
