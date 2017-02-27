const React = require('react');
const { storiesOf, action } = require('@kadira/storybook');
const PropTypes = require('spr-web-components/src/lib/PropTypes');
const SearchResultsList = require('./SearchResultsList');

const SearchResultsListWrapper = React.createClass({

  childContextTypes: {
    location: PropTypes.object
  },

  getChildContext () {
    return {
      location: this.props.location
    }
  },

  render () {
    return (
      <SearchResultsList
        communityId={4}
        filters={{
          per: 10,
          page: 1
        }}
      />
    )
  }
});

storiesOf('SearchResultsList', module)
  .add('search for `new` keyword', () => (
    <SearchResultsListWrapper location={{query: {keyword: 'new'}}} />
  ))
  .add('search for topic type question', () => (
    <SearchResultsList
      communityId={4}
      filters={{
        types: 'question.any',
        per: 10,
        page: 1
      }}
    />
  ))
  .add('limit results', () => (
    <SearchResultsList
      communityId={4}
      filters={{
        types: 'question.any',
        per: 10,
        page: 1,
        limit: 5
      }}
    />
  ))
  .add('search for topic type idea', () => (
    <SearchResultsList
      communityId={4}
      filters={{
        types: 'idea.any',
        per: 10,
        page: 1
      }}
    />
  ))
  .add('search for answered problem topics', () => (
    <SearchResultsList
      communityId={4}
      filters={{
        types: 'problem.complete',
        per: 10,
        page: 1
      }}
    />
  ))
  .add('search for praise topics sorted by recent activity', () => (
    <SearchResultsList
      communityId={4}
      filters={{
        types: 'praise.any',
        sort_on: 'last_activity_at',
        sort_order: 'DESC',
        per: 10,
        page: 1
      }}
    />
  ))
  .add('search for praise topics sorted by likes count', () => (
    <SearchResultsList
      communityId={4}
      filters={{
        types: 'praise.any',
        sort_on: 'me_too_count',
        sort_order: 'DESC',
        per: 10,
        page: 1
      }}
    />
  ))
  .add('search for praise topics sorted by replies count', () => (
    <SearchResultsList
      communityId={4}
      filters={{
        types: 'praise.any',
        sort_on: 'reply_count',
        sort_order: 'DESC',
        per: 10,
        page: 1
        }}
    />
  ));
