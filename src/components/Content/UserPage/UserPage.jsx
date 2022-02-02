import styles from './../Content.module.scss'
import { Link } from 'react-router-dom'

const UserPage = ({ users }) => {

  let usersCreate = users.map(user => {
    return (
      <div key={user.id} className={styles.users}>
        <div>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
        <div>
          <button className={styles.tasks}>
            <Link to=''>Tasks</Link>
          </button>
          <button className={styles.edit}>
            <Link to=''>Edit</Link>
          </button>
          <button className={styles.delete}>
            <Link to=''>Delete</Link>
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.content}>
      <h5>Users</h5>
      <div>
        {usersCreate}
      </div>
    </div>
  )
}

export default UserPage