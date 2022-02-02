import axios from "axios"
const USER_NAME = 'USER_NAME'
const CREATE_USER = 'CREATE_USER'
const CANCEL_USER = 'CANCEL_USER'

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
      let users = state.users
      let newUser = {
        id: users[0]?.id || users[0]?.id === 0 ? users[users.length - 1].id + 1 : 0, // Если нет пользователей, то 0, а если есть нулевой, то прибавить 1
        firstName: state.userName.firstNameText,
        lastName: state.userName.lastNameText
      }
      users.push(newUser)
      // очищаем инпуты после добавления нового пользователя
      state.userName.firstNameText = ''
      state.userName.lastNameText = ''
      // добавляем нового пользователя в БД
      axios.post('https://61f82792783c1d0017c44601.mockapi.io/api/v1/users', {
        users: users 
      })
      return {
        ...state, users
      }
    case CANCEL_USER:
      state.userName.firstNameText = ''
      state.userName.lastNameText = ''
    default:
      return state
  }
}

export default newUserReducer

export const userNameAC = (firstName, lastName) => ({ 
  type: USER_NAME, 
  payload: {
    firstName,
    lastName
  }
})
export const createUserAC = () => ({type: CREATE_USER})
export const cancelUserAC = () => ({type: CANCEL_USER})