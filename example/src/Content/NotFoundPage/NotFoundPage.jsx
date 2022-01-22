import { Link } from "react-router-dom"
import styles from './../Content.module.scss'
import notFoundStyles from './NotFoundPage.module.scss'

const NotFoundPage = (props) => {
  return (
    <div className={styles.content}>
      <div className={notFoundStyles.not_found}>
        <div className={notFoundStyles.not_found_num}>404</div>
        <span>This page doesn't exist. Go <Link to='/'>home</Link></span>
      </div>
    </div>
  )
}

export default NotFoundPage