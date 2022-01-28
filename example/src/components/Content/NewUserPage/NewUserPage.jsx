import styles from './NewUserPage.module.scss'
import { Link } from 'react-router-dom'
import LabelInput from './LabelInput'

const NewUserPage = (props) => {

  let onFirstNameChange = (e) => {
    let text = e.target.value
    props.addFirstNameText(text)
  }

  let onLastNameChange = (e) => {
    let text = e.target.value
    props.addLastNameText(text)
  }

  let addUser = () => props.createUser()

  let addUserCancel = () => props.cancelUser()

  return (
    <div className={styles.content}>
      <LabelInput
        name='First name'
        onChange={onFirstNameChange}
        text={props.firstNameText}
      />
      <LabelInput
        style={styles.lastName}
        name='Last name'
        onChange={onLastNameChange}
        text={props.lastNameText}
      />
      <Link to='/'><button onClick={addUserCancel}>Cancel</button></Link>
      <Link to='/'>
        <button
          onClick={addUser}
          className={styles.create_button}
        >
          Create
        </button>
      </Link>
    </div>
  )
}

export default NewUserPage