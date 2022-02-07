import { connect } from "react-redux"
import { useEffect, useState } from "react"

import { userName, getUsersThunkCreator } from "../../../reducers/user-reducer"
import Users from "./Users"
import { usersAPI } from "../../../api/api"

const UserContainer = (props) => {

  // Передаём сюда id пользователя, которого хотим удалить
  const [userId, setUserId] = useState('')

  // Флаг означающий подтвердили ли удаление пользователя
  const [isDelete, setIsDelete] = useState(false)

  // Удаляем пользователя
  useEffect(() => {
    if (!userId) return
    usersAPI.deleteUser(userId).then(() => {
      // После удаления обнуляем userId и снова получаем пользователей с БД
      setUserId('')
      props.getUsersThunkCreator()
    })
  }, [isDelete])

  return <Users 
            {...props} 
            setUserId={setUserId}
            setIsDelete={setIsDelete}
            isDelete={isDelete}
          />
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