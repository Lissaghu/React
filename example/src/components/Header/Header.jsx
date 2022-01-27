import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <span>Task Manager</span>
      <button><Link to='/newUser'>New user</Link></button>
    </header>
  )
}

export default Header