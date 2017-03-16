const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const HeaderSearchBar = require('../HeaderSearchBar');

const HeaderSearchBarContainer = (props, { router, params }) => {
  const onSubmit = (query) => {
    router.push(`/launcher/${params.componentId}/search?keyword=${query}`);
  };

  return <HeaderSearchBar onSubmit={onSubmit} {...props} />;
};

HeaderSearchBarContainer.propTypes = {
  placeholder: PropTypes.string,
};

HeaderSearchBarContainer.contextTypes = {
  router: PropTypes.object,
  params: PropTypes.object
};

module.exports = HeaderSearchBarContainer;
