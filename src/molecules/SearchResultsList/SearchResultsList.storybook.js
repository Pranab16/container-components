const React = require('react');
const { storiesOf, action } = require('@kadira/storybook');
const SearchResultsList = require('./SearchResultsList');

storiesOf('SearchResultsList', module)
  .add('default', () => (
    <SearchResultsList
      communityId={4}
      query="new"
    />
  ));
