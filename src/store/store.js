import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from './reducers/main'
import { init } from './middlewares/init'
import { editDefinition, saveDefinitions } from './middlewares/definitions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  mainReducer,
  composeEnhancers(
    applyMiddleware(
      init,
      editDefinition,
      saveDefinitions
    ),
  )
)