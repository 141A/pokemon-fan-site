import React from 'react';
import '../css/Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
            <li><a href="/PlayStylesPage">Ways to play the games</a></li>
            <li><a href="/Tool">Pokemon Search</a></li>
            <li><a href="/Random">Pokemon Randomizer</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
