import { connect } from "react-redux"
import { setUsersAC } from "../../../reducers/user-reducer"
import { useEffect } from "react"
import axios from "axios"

import UserPage from "./UserPage"

const UserPageContainer = (props) => {

  // useEffect(async () => {
  //   let baseUrl = 'https://61f82792783c1d0017c44601.mockapi.io/api/v1/users'
  //   let res = await fetch(baseUrl)
  //   let data = await res.json()
  //   props.setUsers(data[0].users)
  // }, [])

  useEffect(() => {
    axios.get('https://61f82792783c1d0017c44601.mockapi.io/api/v1/users')
      .then(({ data }) => props.setUsers(data[0].users))
      .catch(error => console.log(error))
  }, [])

  return <UserPage {...props} />
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer)