const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const configureStore = require('../../configureStore');
const { reducer, searchConversations } = require('./reducer');

const List = require('spr-web-components/src/molecules/List');
const ConversationListItem = require('../ConversationListItem');

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

  renderEmptyText(conversations) {
    if(conversations.length === 0) return <span>{this.props.emptyString}</span>
  }

  render() {
    const state = Object.assign({}, this.store.getState());

    if(state.loading || state.error) return null;

    return (
      <div className="getsat-search-results-list">
        <List
          listItemComponent={ConversationListItem}
          listItems={state.conversations}
          pagination={{...state.pagination, onChange: this.handlePageChange}}
          title={this.props.title}
        />
        {this.renderEmptyText(state.conversations)}
      </div>
    );
  }

  handlePageChange(page) {
    this.store.dispatch(searchConversations(this.props.communityId, {...this.filters, page}));
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
