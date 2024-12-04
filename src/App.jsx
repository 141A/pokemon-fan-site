/** 
 *  Author: Anthony Lei
 * 
 *  Worked on: 11/24/24 - 12/4/24
 * 
 *  The main page of the project, it is also the home page.
 *  This page shows some popular pokemon with a scrolling animation
 *  Also allows for easy access to all of the pages.
 * 
*/ 

import React from 'react';
import { auth } from './Firebase.js';
import './css/HomePage.css';

function App() {
  const user = auth.currentUser; 

  const popularPokemons = [
    { name: 'Pikachu', image: '/images/Pikachu.png' },
    { name: 'Charizard', image: '/images/Charizard.png' },
    { name: 'Bulbasaur', image: '/images/Bulbasaur.png' },
    { name: 'Squirtle', image: '/images/Squirtle.png' }
  ];

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Pokémon Fan App!</h1>
        <p>Explore your favorite Pokémon and more.</p>
        
        {/* Welcome message at the top-right corner */}
        {user && (
          <div className="welcome-message">
            Welcome, {user.email}
          </div>
        )}
      </header>

      <section className="popular-pokemon">
        <h2>Popular Pokémon</h2>
        <div className="pokemon-list">
          {popularPokemons.map((pokemon, index) => (
            <div key={index} className="pokemon-item">
              <img src={pokemon.image} alt={pokemon.name} /> 
              <h3>{pokemon.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="explore">
        <h2>Explore More</h2>
        <p>Check out other sections of the app:</p>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/PlayStylesPage">Ways to play the games</a></li>
          <li><a href="/Tool">Pokemon Search</a></li>
          <li><a href="/Random">Pokemon Randomizer</a></li>
          <li><a href="/Login">Login Page</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
