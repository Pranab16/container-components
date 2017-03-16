const { handleActions } = require('redux-actions');
const { httpGet } = require('../../lib/Http');

const FIND_REQUEST = 'replies/FIND_REQUEST';
const FIND_SUCCESS = 'replies/FIND_SUCCESS';
const FIND_FAILURE = 'replies/FIND_FAILURE';

const INITIAL_STATE = { error: null, loading: true };

const parseComments = (comments = []) => {
  return comments.map(comment => {
    return {
      description: comment.sanitized_content,
      createdAt: comment.created_at,
      author: {
        fullName: comment.author.name,
        picture: comment.author.avatar_uri,
      },
    }
  })
};

const parseReplies = (replies) => {
  return replies.map(reply => {
    return {
      description: reply.sanitized_content,
      createdAt: reply.created_at,
      author: {
        fullName: reply.author.name,
        picture: reply.author.avatar_uri,
      },
      comments: parseComments(reply.comments)
    }
  })
};

const getReplies = (topicId, filters = {}) => {
  return {
    types: {
      request: FIND_REQUEST,
      success: FIND_SUCCESS,
      failure: FIND_FAILURE
    },
    promise: httpGet(`/topics/${topicId}/replies`, {type: 'reply', per: 10, page: 1, ...filters})
      .then(response => {
        const { replies, pagination } = response.data;
        return {
          replies: parseReplies(replies),
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
  [FIND_REQUEST]: state => ({
    error: null,
    loading: true,
  }),
  [FIND_SUCCESS]: (state, { payload }) => ({
    error: null,
    loading: false,
    replies: payload.replies,
    pagination: payload.pagination
  }),
  [FIND_FAILURE]: (state, { payload }) => ({
    error: payload,
    loading: false
  })
};

const reducer = handleActions(actionHandlers, INITIAL_STATE);

module.exports = {
  reducer,
  getReplies
};
