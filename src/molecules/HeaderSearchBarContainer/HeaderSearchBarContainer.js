const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const HeaderSearchBar = require('../HeaderSearchBar');

const HeaderSearchBarContainer = (props, { router }) => {
  const onSubmit = (query) => {
    console.log('transition....');
    router.push(`/search?keyword=${query}`);
  };

  return <HeaderSearchBar onSubmit={onSubmit} {...props} />;
};

HeaderSearchBarContainer.propTypes = {
  placeholder: PropTypes.string,
};

HeaderSearchBarContainer.defaultProps = {
  placeholder: 'Which topics are you interested in?',
};

HeaderSearchBarContainer.contextTypes = {
  router: PropTypes.object,
};

module.exports = HeaderSearchBarContainer;
