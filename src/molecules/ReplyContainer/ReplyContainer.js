const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const configureStore = require('../../lib/configureStore');
const { reducer, getReplies } = require('./reducer');

const Loader = require('../../atoms/Loader');
const List = require('spr-web-components/src/molecules/List');
const ReplyCard = require('../ReplyCard');

require('./ReplyContainer.scss');

class ReplyContainer extends React.Component {
  constructor(props, context) {
    super(props);

    this.store = configureStore(reducer);

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() =>
      this.forceUpdate()
    );

    this.store.dispatch(getReplies(this.props.topicId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handlePageChange(page) {
    this.store.dispatch(getReplies(this.props.topicId, {page}));
  }

  render() {
    const state = Object.assign({}, this.store.getState());

    if (state.error) return null;

    if (state.loading) {
      return <Loader />;
    }

    return (
      <div className="getsat-replies-list">
        <List
          listItemComponent={ReplyCard}
          listItems={state.replies}
          pagination={{...state.pagination, onChange: this.handlePageChange}}
          title={`Replies (${state.pagination.itemsCount})`}
        />
      </div>
    );
  }
}

ReplyContainer.propTypes = {
  topicId: PropTypes.number.isRequired
};

ReplyContainer.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object,
  params: PropTypes.object
};

module.exports = ReplyContainer;
