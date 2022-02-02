import styles from './NewUserPage.module.scss'
import { Link } from 'react-router-dom'
import LabelInput from './LabelInput'

const NewUserPage = (props) => {
  // флаг проверки пустых полей инпутов
  const isEmpty = props.firstNameText && props.lastNameText

  //  Передают значение инпута в state
  let onFirstNameChange = (e) => {
    let text = e.target.value
    props.addFirstNameText(text)
  }

  let onLastNameChange = (e) => {
    let text = e.target.value
    props.addLastNameText(text)
  }

  let addUser = () => {
    return isEmpty ? props.createUser() : null
  }

  let addUserCancel = () => props.cancelUser()

  return (
    <div className={styles.content}>
      <LabelInput
        validationStyle={styles.validation_input}
        name='First name'
        onChange={onFirstNameChange}
        text={props.firstNameText}
      />
      <LabelInput
        style={styles.lastName}
        validationStyle={styles.validation_input}
        name='Last name'
        onChange={onLastNameChange}
        text={props.lastNameText}
      />
      <button onClick={addUserCancel}>
        <Link to='/'>Cancel</Link>
      </button>
      {isEmpty
        ? <button onClick={addUser} className={styles.button_create}>
          <Link to='/'>Create</Link>
        </button>
        : <button onClick={addUser} className={styles.button_disable}><a>Create</a></button>
      }
    </div>
  )
}

export default NewUserPage