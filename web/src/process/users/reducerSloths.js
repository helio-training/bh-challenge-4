import TYPES from './slothTypes'
// import merge from 'lodash/merge'

export const initialState = {
}

const addSloth = (state, action) => {
  console.log('Inside the reducer')
  return {
    sloths: action.slothName
  }
}

const handlers = {
  [TYPES.FETCH_SLOTH_SUCCESS]: addSloth
}

export default function(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'Sloths',
  select(state) {
    return state.sloths
  }
}
