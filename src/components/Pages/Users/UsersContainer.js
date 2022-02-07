import { connect } from "react-redux"
import { useEffect, useState } from "react"

import { userName, getUsersThunkCreator } from "../../../reducers/user-reducer"
import Users from "./Users"
import { usersAPI } from "../../../api/api"

const UserContainer = (props) => {


  return <Users {...props} />
}

const mapStateToProps = (state) => {
  return {
    users: state.newUser.users,
    firstName: state.newUser.userName.firstNameText,
    lastName: state.newUser.userName.lastNameText
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     }
//   }
// }

export default connect(mapStateToProps, { userName, getUsersThunkCreator })(UserContainer)