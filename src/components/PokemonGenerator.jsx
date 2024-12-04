import React, { useState } from 'react';

const PokemonGenerator = () => {
  // Define state variables
  const [pokemon, setPokemon] = useState(null); // To hold the pokemon data
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  // Function to fetch a random Pokemon
  const fetchRandomPokemon = async () => {
    // Start loading
    setLoading(true); 
    try {
      // Fetch a random Pokémon's ID between 1 and 1025 since that's how many pokemon there currently are
      const randomId = Math.floor(Math.random() * 1025) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

      // If there isn't a response show error message
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
      }
      const data = await response.json();
      // Set the fetched data into state
      setPokemon(data);
    } catch (err) {
      // Handle any errors
      setError(err.message);
    } finally {
      // Stop loading
      setLoading(false); 
    }
  };

  return (
    <div className="pokemon-container">
      <h1>Random Pokémon Generator</h1>
      <button onClick={fetchRandomPokemon} disabled={loading}>
        {loading ? 'Loading...' : 'Generate Pokémon'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pokemon && !loading && (
        <div className="pokemon-info">
          <h2>{pokemon.name.toUpperCase()} (#{pokemon.id})</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonGenerator;
