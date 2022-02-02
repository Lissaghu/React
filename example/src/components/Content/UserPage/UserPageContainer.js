import { connect } from "react-redux"
import { setUsersAC } from "../../../reducers/user-reducer"
import UserPageAPI from "./UserPageAPI"

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPageAPI)