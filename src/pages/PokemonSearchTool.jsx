import React from 'react';
import '../css/styles.css';
import NavBar from '../components/NavBar'; 
import SearchForm from '../components/SearchForm';
import Footer from '../components/Footer';

function PokemonSearchTool() {
  return (
    <div>
      <NavBar />  {/* Display the NavBar component */}
      <SearchForm />  {/* Your existing SearchForm component */}
      <Footer />      {/* Footer component */}
    </div>
  );
}

export default PokemonSearchTool;