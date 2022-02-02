import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'

import newUserReducer from '../reducers/newUser-reducer'
import userReduser from '../reducers/user-reducer'

let reducers = combineReducers({
  newUserPage: newUserReducer,
  userPage: userReduser
})

let store = createStore(reducers, composeWithDevTools())

export default store