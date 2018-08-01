import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer
)
// store.dispatch(getDatabases())

export default store;