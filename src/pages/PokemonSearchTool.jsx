import React from 'react';
import '../css/styles.css';
import Header from '../components/Header'; 
import SearchForm from '../components/SearchForm';
import Footer from '../components/Footer';

function PokemonSearchTool() {
  return (
    <div>
      <Header />  {/* Display the Header component */}
      <SearchForm />  {/* Your existing SearchForm component */}
      <Footer />      {/* Footer component */}
    </div>
  );
}

export default PokemonSearchTool;