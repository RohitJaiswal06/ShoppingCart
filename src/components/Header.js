import React, { useContext } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { cartPage } from './Context'
function Header() {
  const {cart}=useContext(cartPage)
  return (
    <div>
      <span className="header">Context Api Tutorial</span>
      <ul className='nav'>
        <li>
            <Link to='/'>Home Page</Link>
        </li>
        <li>
            <Link to='/cart'>Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
