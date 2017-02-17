const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const configureStore = require('../../configureStore');
const { reducer, searchConversations } = require('./reducer');

const List = require('spr-web-components/src/molecules/List');
const ConversationListItem = require('../ConversationListItem');

class SearchResultsList extends React.Component {
  constructor(props) {
    super(props);

    this.store = configureStore(reducer);

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() =>
        this.forceUpdate()
    );

    this.store.dispatch(searchConversations(this.props.communityId, this.props.filters));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = this.store.getState();

    if(state.loading || state.error) return null;

    return (
      <div className="getsat-search-results-list">
        <List listItemComponent={ConversationListItem} listItems={state.conversations} pagination={{...state.pagination, onChange: this.handlePageChange}} />
      </div>
    );
  }

  handlePageChange(page) {
    this.store.dispatch(searchConversations(this.props.communityId, {...this.props.filters, page}));
  }
}

SearchResultsList.propTypes = {
  communityId: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired
};

module.exports = SearchResultsList;
