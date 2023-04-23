import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <span className="header">Context Api Tutorial</span>
      <ul className='nav'>
        <li>
            <Link to='/'>Home Page</Link>
        </li>
        <li>
        <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
