import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import userCredentialsSlice from "../pages/NewUser/reducers"

const reducers = combineReducers({
  userCredentialsSlice,
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
