import update from 'immutability-helper'
import { definitionsActionNames } from './../actions/definitions'
import * as definitions from './../../data/definitions'

function initialState() {
  const names = Object.keys(definitions)
  return {
    definitions: Object.values(definitions).map((item, index) => {
      return {
        name: names[index],
        id: index,
        ...item
      }
    })
  }
}

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case definitionsActionNames.ADD_DEFINITION:
      return update(state, {
        definitions: {$push: [action.definition]}
      })
      case definitionsActionNames.UPDATE_DEFINITION:
      return update(state, {
        definitions: {$set: [
          ...state.definitions.slice(0, action.id),
          action.definition,
          ...state.definitions.slice(action.id + 1)
        ]}
      })
      case definitionsActionNames.DELETE_DEFINITION:
      return update(state, {
        definitions: {$set: [
          ...state.definitions.slice(0, action.id),
          ...state.definitions.slice(action.id + 1)
        ]}
      })
    default:
      return {
        ...state
      }
  }
}

export default reducer