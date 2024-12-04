import React from 'react';
import '../css/styles.css';
import Header from '../components/Header';
import PokemonGenerator from '../components/PokemonGenerator';  
import Footer from '../components/Footer'; 

function PokemonRandomizerPage() {
  return (
    <div>
      <Header />  {/* Display the Header component */}
      <PokemonGenerator />  {/* Your existing SearchForm component */}
      <Footer />      {/* Footer component */}
    </div>
  );
}

export default PokemonRandomizerPage;