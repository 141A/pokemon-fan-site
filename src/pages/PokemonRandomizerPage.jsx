/** 
 *  Author: Anthony Lei
 * 
 *  Worked on: 11/27/24 - 12/1/24
 * 
 *  This page uses the compoments Navbar, PokemonGenerator and Footer, the 
 *  purpose of this page is to allow the user to generate a random pokemon 
 * 
*/

import React from 'react';
import '../css/styles.css';
import NavBar from '../components/NavBar';
import PokemonGenerator from '../components/PokemonGenerator';  
import Footer from '../components/Footer'; 

function PokemonRandomizerPage() {
  return (
    <div>
      <NavBar />  {/* Display the NavBar component */}
      <PokemonGenerator />  {/* Your existing SearchForm component */}
      <Footer />      {/* Footer component */}
    </div>
  );
}

export default PokemonRandomizerPage;