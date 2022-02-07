import { Link } from "react-router-dom"
import notFoundStyles from './NotFound.module.scss'

const NotFound = (props) => {
  return (
    <div className={notFoundStyles.not_found}>
      <div className={notFoundStyles.not_found_num}>404</div>
      <span>This page doesn't exist. Go <Link to='/'>home</Link></span>
    </div>
  )
}

export default NotFound