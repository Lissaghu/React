import { usersAPI } from "../api/api"

const USER_NAME = 'USER_NAME'
const CREATE_USER = 'CREATE_USER'
const SET_USERS = 'SET_USERS'
const CLEAR_INPUT = 'CLEAR_INPUT'
const EDIT_USER = 'EDIT_USER'

const initialState = {
  users: [
    // { id: 0, firstName: '', lastName: ''}
  ],
  userName: {
    firstNameText: '',
    lastNameText: ''
  }
} 

const newUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_NAME:
      return {
        ...state, userName: {
          firstNameText: action.payload.firstName,
          lastNameText: action.payload.lastName
        }
      }
    case CREATE_USER:
      let users = []
      let newUser = {
        firstName: state.userName.firstNameText,
        lastName: state.userName.lastNameText,
        id: users[0]?.id || users[0]?.id === '1' ? `${(+users[users.length - 1].id + 1)}` : '1' // Если нет пользователей, то 0, а если есть нулевой, то прибавить 1
      }
      users.push(newUser)
      return {
        ...state, users, userName: {firstNameText: '', lastNameText: ''}
      }
    case SET_USERS:
      return {
        ...state, users: action.users
      }
    case CLEAR_INPUT:
      return {
        ...state, userName: {firstNameText: '', lastNameText: ''} 
      }
    default:
      return state
  }
}

export default newUserReducer

export const userName = (firstName, lastName) => ({ 
  type: USER_NAME, 
  payload: {
    firstName,
    lastName
  }
})
export const createUser = () => ({type: CREATE_USER})
export const setUsers = (users) => ({ type: SET_USERS, users })
export const clearInput = () => ({type: CLEAR_INPUT})

export const getUsersThunkCreator= () => {
  return (dispatch) => {
    usersAPI.getUsers().then(({ data }) => {
      dispatch(setUsers(data))
    })
    .catch(error => console.log(error))
  }
}