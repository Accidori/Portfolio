import React from "react"
import { Link } from "react-router-dom"



const Header: React.FC = () => {
  return (
    <header>
      <h1>Rita</h1>
      <nav className = "header">
        <ul className = "nav-links">
          //use link to navigate to different pages
          <li><Link to = "/">About Me</Link></li>
          <li><Link to = "/portfolio">Portfolio</Link></li>
          <li><Link to = "/contact">Contact</Link></li>
          <li><Link to = "/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

