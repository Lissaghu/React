import { connect } from "react-redux"

import Header from "./Header"
import { userName, createUser, clearInput, getUsersThunkCreator } from "../../reducers/user-reducer"
import { useEffect, useState } from "react"
import { usersAPI } from "../../api/api"

const HeaderContainer = (props) => {
  // массив с пользователями из стейта
  const users = props.users

  // флаг, проверяющий нажали ли кнопку Create в модальном окне
  let [isCreate, setIsCreate] = useState(false)
  
  useEffect(() => {
    // добавляем в БД данные пользователя из массива users
    // массив users всегда обнуляется перед добавлением нового пользователся
    if (users[0]) {
      return usersAPI.setUsers(users[0].firstName, users[0].lastName)
    }
  }, [isCreate])
  
  // получаем данные из БД и отправляем их в массив users в state
  useEffect(() => {
    setTimeout(() => props.getUsersThunkCreator(), 200)
  }, [isCreate])
  
  return <Header {...props} setIsCreate={setIsCreate} isCreate={isCreate}/>
}

const mapStateToProps = (state) => {
  return {
    firstName: state.newUser.userName.firstNameText,
    lastName: state.newUser.userName.lastNameText,
    users: state.newUser.users
  }
}

export default connect(mapStateToProps, { userName, createUser, clearInput, getUsersThunkCreator })(HeaderContainer)