import styles from './AddNewUserPage.module.scss'
import { Link } from 'react-router-dom'

const AddNewUserPage = (props) => {
  return (
    <div className={styles.content}>
      <label>
        <div>First name</div>
        <input type="text" />
      </label>
      <label>
        <div className={styles.lastName}>Last name</div>
        <input type="text" />
      </label>
      <button><Link to='/userPage'>Cancel</Link></button>
      <button><Link to='/userPage'>Create</Link></button>
    </div>
  )
}

export default AddNewUserPage