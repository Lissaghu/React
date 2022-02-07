import { Link } from 'react-router-dom'
import { useState } from 'react'

import Modal from '../../Modal/Modal'
import s from './../../Content.module.scss'
import sUsers from './Users.module.scss'
import Input from '../../Input/Input'
import sInput from '../../Input/Input.module.scss'

const UserPage = ({
  users,
  setUserId,
  setIsDelete,
  isDelete,
  setUserIndex,
  firstName,
  lastName,
  isEdit,
  setIsEdit,
  userName
}) => {

  // Проверка активного состояния модального окна удаления
  const [modalActive, setModalActive] = useState(false)
  // Проверка активного состояния модального окна редактирования пользователя
  const [editModalActive, setEditModalActive] = useState(false)
  // Флаг проверки пустых полей инпутов
  const [isEmpty, setIsEmpty] = useState(false)

  //  Передают значение инпута в state
  const onFirstNameChange = ({ target: { value } }) => userName(value, lastName)
  const onLastNameChange = ({ target: { value } }) => userName(firstName, value)

  let usersCreate = users.map((user, i) => {
    return (
      <div key={user.id} className={sUsers.users}>
        <div>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
        <div>
          <button className={sUsers.tasks}>
            <Link to=''>Tasks</Link>
          </button>
          <button
            className={sUsers.edit}
            onClick={() => {
              // setUserIndex(i)
              setUserId(user.id)
              setEditModalActive(true)
            }}
          >
            Edit
          </button>
          <button
            className={sUsers.delete}
            onClick={() => {
              setModalActive(true)
              setUserId(user.id)
            }}
          >
            Delete
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className={s.content}>
      <h5>Users</h5>
      <div>
        {usersCreate}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={sUsers.delete_user}>
          <div className={sUsers.delete_question}>Delete user 'username'?</div>
          <button
            className={sUsers.delete_cancel}
            onClick={() => setModalActive(false)}
          >
            Cancel
          </button>
          <button
            className={sUsers.delete_yes}
            onClick={() => {
              setIsDelete(isDelete ? false : true)
              setModalActive(false)
            }}
          >
            Yes
          </button>
        </div>
      </Modal>
      <Modal active={editModalActive} setActive={setEditModalActive}>
        <div className={sInput.modal_header}>Edit user</div>
        <form className={sInput.modal_form} action="">
          <Input
            validationStyle={sInput.validation_input}
            name='First name'
            onChange={onFirstNameChange}
            text={firstName}
            isEmpty={setIsEmpty}
          />
          <Input
            style={sInput.lastName}
            validationStyle={sInput.validation_input}
            name='Last name'
            onChange={onLastNameChange}
            text={lastName}
            isEmpty={setIsEmpty}
          />
          <button
            className={isEmpty ? sUsers.button_active : sUsers.button_disable}
            onClick={(e) => {
              e.preventDefault()
              if (isEmpty) {
                setEditModalActive(false)
                setIsEdit(isEdit ? false : true)
              }
            }}
          >
            Edit
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default UserPage