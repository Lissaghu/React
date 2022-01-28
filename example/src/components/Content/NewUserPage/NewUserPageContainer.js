import React from "react"
import { connect } from "react-redux"
import NewUserPage from "./NewUserPage"
import { firstNameAC, lastNameAC, createUserAC, cancelUserAC } from "../../../reducers/newUser-reducer"

const mapStateToProps = (state) => {
  return {
    firstNameText: state.newUserPage.firstNameText,
    lastNameText: state.newUserPage.lastNameText
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
    addFirstNameText: (text) => {
      dispatch(firstNameAC(text))
    },
    addLastNameText: (text) => {
      dispatch(lastNameAC(text))
    }
  }
}

export const NewUserPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewUserPage)