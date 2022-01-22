import React from "react"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='App-navbar'>
      <Link to='/'>First page</Link>
      <Link to='/secondPage'>Second page</Link>
      <Link to='/thirdPage'>Third page</Link>
    </div>
  )
}

export default Navbar