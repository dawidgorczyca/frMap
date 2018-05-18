export const ADD_DEFINITION = '[definitions] ADD'
export const EDIT_DEFINITION = '[definitions] EDIT'
export const UPDATE_DEFINITION = '[definitions] UPDATE'
export const DELETE_DEFINITION = '[definitions] DELETE'

export const addDefinition = (definition) => ({
  type: ADD_DEFINITION,
  definition
})

export const editDefinition = (
  attributeName,
  attributeValue,
  definitionId
) => ({
  type: EDIT_DEFINITION,
  attributeName,
  attributeValue,
  definitionId
})

export const updateDefinition = (definition, id) => ({
  type: UPDATE_DEFINITION,
  definition,
  id
})

export const deleteDefinition = (id) => ({
  type: UPDATE_DEFINITION,
  id
})

export const definitionsActionCreators = {
  addDefinition,
  editDefinition,
  updateDefinition,
  deleteDefinition
}

export const definitionsActionNames = {
  ADD_DEFINITION,
  EDIT_DEFINITION,
  UPDATE_DEFINITION,
  DELETE_DEFINITION
}