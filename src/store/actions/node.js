export const INITIALIZE_NODES = '[nodes] INIT'
export const ADD_NODE = '[nodes] ADD'
export const UPDATE_NODE = '[nodes] UPDATE'
export const SELECT_NODE = '[nodes] SELECT'
export const DELETE_NODE = '[nodes] DELETE'

export const initialize = () => ({
  type: INITIALIZE_NODES
})

export const addNode = (node) => ({
  type: ADD_NODE,
  node
})

export const updateNode = (node) => ({
  type: UPDATE_NODE,
  node
})

export const selectNode = (id) => ({
  type: SELECT_NODE,
  id
})

export const deleteNode = (id) => ({
  type: DELETE_NODE,
  id
})

export const nodeActionCreators = {
  initialize,
  addNode,
  updateNode,
  selectNode,
  deleteNode
}

export const nodeActionNames = {
  ADD_NODE,
  UPDATE_NODE,
  SELECT_NODE,
  DELETE_NODE,
  INITIALIZE_NODES
}