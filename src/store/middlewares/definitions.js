import AppInstance from './../../data/instances'
import {structureFactory} from './../../data/generator'
import {definitionsActionNames} from './../actions/definitions'
import {definitionsActionCreators} from './../actions/definitions'

export const editDefinition = store => next => action => {
  next(action)
  if(action.type === definitionsActionNames.EDIT_DEFINITION) {
    const { definitions } = store.getState().definitionsReducer
    const definition = JSON.parse(JSON.stringify(definitions[action.definitionId]))
    definition[action.attributeName] = action.attributeValue
    store.dispatch(
      definitionsActionCreators.updateDefinition(
        definition,
        action.definitionId
      )
    )
  }
}

export const saveDefinitions = store => next => action => {
  next(action)
  if(action.type === definitionsActionNames.UPDATE_DEFINITION) {
    // Plugin this application into electron instance and
    // here we need to write to file on disk
  }
}