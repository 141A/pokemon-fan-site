/**
 * Author: Anthony Lei
 * 
 * Footer component to credit the API that was used for the page.
 * Worked on 11/24/24 - 12/4/24
 * 
 * */
import React from 'react';

function Footer() {
  return (
    <footer>
      <p className="credit">
        Created using the data provided by <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">PokeAPI</a>
      </p>
    </footer>
  );
}

export default Footer;
