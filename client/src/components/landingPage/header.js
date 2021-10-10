import React from 'react'
import '../styles/header.css'

function Header() {
    return (
        <div>
             <div className="navbar">
           <nav>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#feature">Features</a></li>
                  <li><a href="#footer">Contact</a></li>
                  <li><a className="user-login" href="/userDash">User</a></li>
                  <li><a className="hero-login" href="/heroDash">Hero</a></li>
              </ul>
            </nav>
       </div>
            
        </div>
    )
}

export default Header
