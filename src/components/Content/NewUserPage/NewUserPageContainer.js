import { connect } from "react-redux"
import NewUserPage from "./NewUserPage"
import { userNameAC, createUserAC, cancelUserAC } from "../../../reducers/newUser-reducer"

const mapStateToProps = (state) => {
  return {
    firstNameText: state.newUserPage.userName.firstNameText,
    lastNameText: state.newUserPage.userName.lastNameText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: () => {
      dispatch(createUserAC())
    },
    cancelUser: () => {
      dispatch(cancelUserAC())
    },
    addUserName: (firstName, lastName) => {
      dispatch(userNameAC(firstName, lastName))
    }
  }
}

export const NewUserPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewUserPage)