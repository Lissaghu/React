import { Link } from "react-router-dom"
import styles from './404.module.scss'

const custom404 = () => {
  return (
    <div className={styles.not_found}>
      <div className={styles.not_found_num}>404</div>
      <span>This page doesn't exist. Go <Link to='/'>home</Link></span>
    </div>
  )
}

export default custom404
