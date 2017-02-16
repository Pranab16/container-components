const React = require('react');
const { Link: RouterLink } = require('react-router');
const classnames = require('classnames');
const { omit } = require('lodash');
const validUrl = require('valid-url');

const PropTypes = require('spr-web-components/src/lib/PropTypes');

require('./Link.scss');

const Link = props => {
  const { children, className, href, onClick } = props;
  const classes = classnames('spx-link', className);
  const otherProps = omit(props, [
    'children',
    'className',
    'href',
    'onClick'
  ]);
  let onClickProps = {};

  if (onClick) {
    const onLinkClick = (event) => {
      event.preventDefault();
      onClick(event);
    };
    onClickProps = {onClick: onLinkClick};
  }

  if (validUrl.isUri(href)) {
    return (
      <a href={href} target="_blank" className={classes} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink className={classes} to={href} {...onClickProps} {...otherProps}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  style: PropTypes.object,
  componentName: PropTypes.string,
  children: React.PropTypes.any.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

module.exports = Link;
