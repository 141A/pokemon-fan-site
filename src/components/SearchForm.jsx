// src/SearchForm.js
import React, { useState } from 'react';

function SearchForm() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [error, setError] = useState(null);

  // Fetch Pokemon data from PokeAPI
  const fetchPokemonData = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  // Handle the search functionality
  const handleSearch = async () => {
    setError(null);
    setPokemonInfo(null);

    if (!pokemonName) {
      setError('Please enter a Pokémon name.');
      return;
    }

    try {
      const data = await fetchPokemonData(pokemonName.toLowerCase());
      setPokemonInfo(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mainBox">
      <div className="input-container">
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter a Pokémon name here..."
        />
        <button onClick={handleSearch}>Search</button>
        <div id="pokemonInfo">
          {error && <p>{error}</p>}
          {pokemonInfo && !error && (
            <div>
              <h1>{pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1)}</h1>
              <p><strong>Height:</strong> {pokemonInfo.height}</p>
              <p><strong>Weight:</strong> {pokemonInfo.weight}</p>
              <p><strong>Abilities:</strong> {pokemonInfo.abilities.map(ability => ability.ability.name).join(', ')}</p>
              <img
                src={pokemonInfo.sprites.front_default}
                alt={pokemonInfo.name}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
