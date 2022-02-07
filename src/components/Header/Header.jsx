import { useState } from 'react'

import s from './Header.module.scss'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import sModalInput from '../Input/Input.module.scss'

const Header = (props) => {
  // Флаг проверки пустых полей инпутов
  const [isEmpty, setIsEmpty] = useState(false)

  // Проверка активного модального окна
  const [modalActive, setModalActive] = useState(false)

  //  Передают значение инпута в state
  const onFirstNameChange = ({ target: { value } }) => props.userName(value, props.lastName)
  const onLastNameChange = ({ target: { value } }) => props.userName(props.firstName, value)

  // Создаём новых пользователей 
  const addUser = () => props.createUser()

  return (
    <header className={s.header}>
      <span>Task Manager</span>
      <button onClick={() => setModalActive(true)}>
        New user
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={sModalInput.modal_header}>Create new user</div>
        <form className={sModalInput.modal_form} action="">
          <Input
            validationStyle={sModalInput.validation_input}
            name='First name'
            onChange={onFirstNameChange}
            text={props.firstName}
            isEmpty={setIsEmpty}
          />
          <Input
            style={sModalInput.lastName}
            validationStyle={sModalInput.validation_input}
            name='Last name'
            onChange={onLastNameChange}
            text={props.lastName}
            isEmpty={setIsEmpty}
          />
          <button
            className={isEmpty ? s.button_active : s.button_disable}
            onClick={(e) => {
              e.preventDefault()
              if (isEmpty) {
                addUser()
                setModalActive(false)
                props.setIsCreate(props.isCreate ? false : true)
              }
            }}
          >
            Create
          </button>
        </form>
      </Modal>
    </header>
  )
}

export default Header