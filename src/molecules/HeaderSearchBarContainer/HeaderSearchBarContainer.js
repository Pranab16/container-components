const React = require('react');
const { Router } = require('react-router');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const HeaderSearchBar = require('../HeaderSearchBar');

const HeaderSearchBarContainer = (props) => {
  const onSubmit = (query) => {
    Router.transitionTo('/search', {query: query});
  };

  return <HeaderSearchBar onSubmit={onSubmit} {...props} />;
};

HeaderSearchBarContainer.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string
};

HeaderSearchBarContainer.defaultProps = {
  placeholder: 'Which topics are you interested in?'
};

module.exports = HeaderSearchBarContainer;
