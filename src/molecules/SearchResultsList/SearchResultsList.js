const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const configureStore = require('../../lib/configureStore');
const { reducer, searchConversations } = require('./reducer');

const Loader = require('../../atoms/Loader');
const List = require('spr-web-components/src/molecules/List');
const ConversationListItem = require('../ConversationListItem');

require('./SearchResultsList.scss');

class SearchResultsList extends React.Component {
  constructor(props, context) {
    super(props);

    this.store = configureStore(reducer);
    const query = context.location && context.location.query.keyword ? context.location.query.keyword : '';

    this.filters = {...this.props.filters, query: query};

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const query = nextContext.location && nextContext.location.query.keyword ? nextContext.location.query.keyword : '';
    if (query !== this.filters.query) {
      this.filters.query = query;
      this.store.dispatch(searchConversations(this.props.communityId, this.filters));
    }
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() =>
        this.forceUpdate()
    );

    this.store.dispatch(searchConversations(this.props.communityId, this.filters));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handlePageChange(page) {
    this.store.dispatch(searchConversations(this.props.communityId, {...this.filters, page}));
  }

  renderEmptyText(conversations) {
    if(conversations.length === 0) return <span className="getsat-search-results-list__empty-text">{this.props.emptyString}</span>
  }

  render() {
    const state = Object.assign({}, this.store.getState());

    if (state.error) return null;

    if (state.loading) {
      return <Loader className="getsat-search-results-list__loader" />;
    }

    let { conversations, pagination } = state;
    if (this.filters.limit) {
      conversations = conversations.slice(0, this.filters.limit);
      pagination.itemsCount = this.filters.limit;
    }

    return (
      <div className="getsat-search-results-list">
        <List
          listItemComponent={ConversationListItem}
          listItems={conversations}
          pagination={{...pagination, onChange: this.handlePageChange, className: 'getsat-search-results-list__pagination'}}
          title={this.props.title}
        />
        {this.renderEmptyText(conversations)}
      </div>
    );
  }
}

SearchResultsList.propTypes = {
  communityId: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  title: PropTypes.string,
  emptyString: PropTypes.string,
};

SearchResultsList.defaultProps = {
  emptyString: 'No Results Found!!',
};

SearchResultsList.contextTypes = {
  location: PropTypes.object,
  params: PropTypes.object
};

module.exports = SearchResultsList;
