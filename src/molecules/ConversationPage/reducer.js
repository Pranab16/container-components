const { handleActions } = require('redux-actions');
const { httpGet } = require('../../lib/Http');

const FIND_REQUEST = 'conversations/FIND_REQUEST';
const FIND_SUCCESS = 'conversations/FIND_SUCCESS';
const FIND_FAILURE = 'conversations/FIND_FAILURE';

const INITIAL_STATE = { error: null, loading: true };

const parseConversation = (conversation) => {
  return {
    topicId: conversation.id,
    title: conversation.subject,
    description: conversation.sanitized_content,
    createdAt: conversation.created_at,
    topicType: conversation.type,
    topicUrl: conversation.permalink,
    completed: conversation.status === 'complete',
    author: {
      fullName: conversation.author.name,
      picture: conversation.author.avatar_uri,
    }
  }
};

const getConversation = (slug) => {
  return {
    types: {
      request: FIND_REQUEST,
      success: FIND_SUCCESS,
      failure: FIND_FAILURE
    },
    promise: httpGet(`/topics/${slug}`)
      .then(response => {
        const { topic } = response.data;
        return {
          conversation: parseConversation(topic)
        }
      })
  };
};

const actionHandlers = {
  [FIND_REQUEST]: state => ({
    error: null,
    loading: true,
  }),
  [FIND_SUCCESS]: (state, { payload }) => ({
    error: null,
    loading: false,
    conversation: payload.conversation
  }),
  [FIND_FAILURE]: (state, { payload }) => ({
    error: payload,
    loading: false
  })
};

const reducer = handleActions(actionHandlers, INITIAL_STATE);

module.exports = {
  reducer,
  getConversation
};
