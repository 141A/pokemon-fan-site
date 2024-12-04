/** 
 *  Author: Anthony Lei
 * 
 *  Worked on: 12/1/24 - 12/1/24
 * 
 *  This page used to teach the user the
 *  different ways that they could play
 *  the pokemon games.
 * 
*/

import React from 'react';
import NavBar from '../components/NavBar.jsx';
import '../css/styles.css'

const PlaystylesPage = () => {
  return (
    <div>
      <NavBar />
      <div className="playstyles">
        <h1>Ways to Play Pokémon</h1>
        
        <div>
          <h2>Normal Play</h2>
          <p>
            This is the traditional way to play Pokémon where you progress through the game’s storyline, capturing Pokémon, battling gyms, collecting gym badges and defeating the elite four.
          </p>
        </div>
        
        <div>
          <h2>Nuzlocke Challenge (Standard)</h2>
          <p>
            The Nuzlocke Challenge is a self-imposed rule set to increase the difficulty of a Pokémon game. And for the hardcore players they can use the hardcore Nuzlocke rules:
            <ul>
              <li>Pokemon must be named to build attachment.</li>
              <li>Fainting a Pokémon means it is permanently released or permanently stored in the PC.</li>
              <li>You may only catch the first Pokémon encountered in each area.</li>
              <li>Hardcore: Cannot use any items during battle</li>
              <li>Hardcore: Have to play on set mode (Won't ask the player if they want to switch pokemon after knocking out opponent's pokemon)</li>
              <li>Hardcore: Not allowed to use pokemon centers to heal pokemon</li>
              <li>OPTIONAL: A self imposed level cap that prevents you from over leveling past the next major fight (gym battles)</li>
              <li>OPTIONAL: Giving yourself infinite rare candies to level to a certain level before major fights</li>
            </ul>
          </p>
        </div>

        <div>
          <h2>Egglocke</h2>
          <p>
            The Egglocke is a variation of the Nuzlocke challenge where you start the game with a batch of eggs. 
            These are pokemon eggs you need to hatch after major battles like gym battles. You are only allowed 
            to use the pokemon that come out of eggs.
          </p>
        </div>
        
        <div>
          <h2>Randomizer</h2>
          <p>
            A pokemon randomizer uses a tool called Universal Pokemon Randomizer 
            that uses the base game and randomizes aspects of the game. In most 
            cases it's randomizes the pokemon encouters around the map and other 
            trainer's pokemons. This can add a layer of unpredictability to the 
            game forcing players to come up with new strategies.
          </p>
        </div>
        
        <div>
          <h2>Map Randomizer</h2>
          <p>
            A Map Randomizer takes the randomizer idea further by shuffling the locations of towns, gyms, routes, and other map-related elements. This turns the game world into a completely new and confusing layout that makes exploration more challenging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaystylesPage;
