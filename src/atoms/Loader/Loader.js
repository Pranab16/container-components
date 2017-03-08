const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Icon = require('spr-web-components/src/atoms/Icon');
const loader = require('../../img/ellipsis.svg');

require('./Loader.scss');

const Loader = (props) => (
  <div className={classnames('getsat-loader', props.className)}>
    <Icon icon={loader} className="getsat-loader__icon" />
  </div>
);

Loader.propTypes = {
  className: PropTypes.className,
  style: PropTypes.object,
  text: PropTypes.string,
  url: PropTypes.string.isRequired
};


module.exports = Loader;
