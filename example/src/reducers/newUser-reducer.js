const ADD_FIRST_NAME = 'ADD_FIRST_NAME'
const ADD_LAST_NAME = 'ADD_LAST_NAME'
const CREATE_USER = 'CREATE_USER'
const CANCEL_USER = 'CANCEL_USER'

let newUserPage = {
  users: [
    // { id: 0, firstName: '', lastName: ''}
  ],
  firstNameText: '',
  lastNameText: ''
}

const newUserReducer = (state = newUserPage, action) => {
  switch(action.type) {
    case ADD_FIRST_NAME:
      return {
        ...state, firstNameText: action.text
      }
    case ADD_LAST_NAME:
      return {
        ...state, lastNameText: action.text
      }
    case CREATE_USER:
      let users = state.users
      let newUser = {
        id: users[0]?.id || users[0]?.id === 0 ? users[users.length - 1].id + 1 : 0, // Если нет пользователей, то 0, а если есть нулевой, то прибавить 1
        firstName: state.firstNameText,
        lastName: state.lastNameText
      }
      users.push(newUser)

      // очищаем инпуты после добавления нового пользователя
      state.firstNameText = ''
      state.lastNameText = ''
      return {
        ...state, users
      }
    case CANCEL_USER:
      state.firstNameText = ''
      state.lastNameText = ''
    default:
      return state
  }
}

export default newUserReducer

export const firstNameAC = (text) => (
  {type: ADD_FIRST_NAME, text}
)

export const lastNameAC = (text) => (
  {type: ADD_LAST_NAME, text}
)

export const createUserAC = () => ({type: CREATE_USER})

export const cancelUserAC = () => ({type: CANCEL_USER})