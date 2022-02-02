const SET_USERS = 'SET_USERS'

const initialState = {
  users: []
}

const userReduser = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS:
      return {
        ...state, users: action.users
      }
    default:
      return state
  }
}

export default userReduser

export const setUsersAC = (users) => ({ type: SET_USERS, users })