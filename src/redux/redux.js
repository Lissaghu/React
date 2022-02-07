import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

import newUserReducer from '../reducers/user-reducer'

let reducers = combineReducers({
  newUser: newUserReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store