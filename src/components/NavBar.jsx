/**
 * Author: Anthony Lei
 * 
 * This component is a navbar that holds all the paths to other pages.
 * Worked on 11/24/24 - 11/24/24
 * 
 * */

import React from 'react';
import '../css/NavBar.css'; 

function NavBar() {
  return (
    <header className="NavBar">
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
            <li><a href="/PlayStylesPage">Ways to play the games</a></li>
            <li><a href="/Tool">Pokemon Search</a></li>
            <li><a href="/Random">Pokemon Randomizer</a></li>
            <li><a href="/Login">Login Page</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
