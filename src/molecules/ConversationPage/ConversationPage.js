const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const configureStore = require('../../lib/configureStore');
const { reducer, getConversation } = require('./reducer');

const Loader = require('../../atoms/Loader');
const ConversationCard = require('../ConversationCard');
const ReplyContainer = require('../ReplyContainer');

class ConversationPage extends React.Component {
  constructor(props, context) {
    super(props);

    this.store = configureStore(reducer);
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() =>
      this.forceUpdate()
    );

    this.store.dispatch(getConversation(this.context.params.slug));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = Object.assign({}, this.store.getState());

    if (state.error) return null;

    if (state.loading) {
      return <Loader className="getsat-search-results-list__empty-text" />;
    }

    return (
      <div>
        <ConversationCard conversation={state.conversation} />
        <ReplyContainer topicId={state.conversation.topicId} />
      </div>
    );
  }
}

ConversationPage.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object,
  params: PropTypes.object
};

module.exports = ConversationPage;
