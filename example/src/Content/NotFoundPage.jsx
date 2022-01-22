import { Link } from "react-router-dom"

const NotFoundPage = (props) => {
  return (
    <div className='App-content'>
      <div className="App-not-found">
        <div className="App-not-found-num">404</div>
        <span>This page doesn't exist. Go <Link to='/'>home</Link></span>
      </div>
    </div>
  )
}

export default NotFoundPage