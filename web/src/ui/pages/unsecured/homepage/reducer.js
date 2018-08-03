import TYPES from './types'
// import merge from 'lodash/merge'

export const initialState = {
  active: null,
  entities: {}
}

const loginUser = (state, action) => {
  // TODO Challenge 4 complete the reducer based on the data you pass back from your action
  return {
    ...state,
    message: action.message
  }
}

const handlers = {
  [TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser
}

export default function(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'homepage',
  select(state) {
    return state.homepage
  }
}
