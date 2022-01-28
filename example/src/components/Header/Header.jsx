import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <span>Task Manager</span>
      <Link to='/newUser'><button>New user</button></Link>
    </header>
  )
}

export default Header