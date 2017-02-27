const { httpGet } = require('../../lib/Http');
const { handleActions } = require('redux-actions');

const LIST_REQUEST = 'conversations/LIST_REQUEST';
const LIST_SUCCESS = 'conversations/LIST_SUCCESS';
const LIST_FAILURE = 'conversations/LIST_FAILURE';

const INITIAL_STATE = { conversations: undefined, error: null, loading: true };

const truncateTitle = title => {
  if (title.length >= 80) {
    return title.substring(0, 77).concat('...');
  }

  return title;
};

const parseConversations = (conversations) => {
  return conversations.map(conversation => {
    return {
      title: truncateTitle(conversation.subject),
      topicType: conversation.type,
      topicUrl: conversation.permalink,
      completed: conversation.status === 'complete'
    }
  })
};

module.exports.searchConversations = (communityId, filters) => {
  return {
    types: {
      request: LIST_REQUEST,
      success: LIST_SUCCESS,
      failure: LIST_FAILURE
    },
    promise: httpGet(`/communities/${communityId}/topics/intercept_search`, filters)
      .then(response => {
        const { topics, pagination } = response.data;
        return {
          topics: parseConversations(topics),
          pagination: {
            itemsCount: pagination.total,
            currentPage: pagination.current_page,
            perPage: 10
          }
        }
      })
  };
};

const actionHandlers = {
  [LIST_REQUEST]: state => ({
    conversations: [], loading: true
  }),
  [LIST_SUCCESS]: (state, { payload }) => ({
    error: null,
    loading: false,
    pagination: payload.pagination,
    conversations: payload.topics
  }),
  [LIST_FAILURE]: (state, { payload }) => ({
    conversations: [], error: payload, loading: false
  })
};

module.exports.reducer = handleActions(actionHandlers, INITIAL_STATE);
