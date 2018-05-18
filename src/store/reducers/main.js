import { combineReducers } from 'redux'
import nodeReducer from './node'
import definitionsReducer from './definitions'

export default combineReducers({
  nodeReducer,
  definitionsReducer
})