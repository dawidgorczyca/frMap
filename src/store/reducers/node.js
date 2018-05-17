import update from 'immutability-helper'
import { nodeActionNames } from './../actions/node'

const initialState = {
  nodes: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case nodeActionNames.ADD_NODE:
      return update(state, {
        nodes: {$push: [action.node]}
      })
    case nodeActionNames.UPDATE_NODE:
      return update(state, {
        nodes: {$set: [
          ...state.nodes.slice(0, action.index),
          action.node,
          ...state.nodes.slice(action.index + 1)
        ]}
      })
    case nodeActionNames.DELETE_NODE:
      return update(state, {
        nodes: {$set: [
          ...state.nodes.slice(0, action.index),
          ...state.nodes.slice(action.index + 1)
        ]}
      })
    default:
      return {
        ...state
      }
  }
}

export default reducer