import { createStore, combineReducers } from "redux"
import newUserReducer from '../reducers/newUser-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

let reducers = combineReducers({
  newUserPage: newUserReducer,
})

let store = createStore(reducers, composeWithDevTools())

export default store

