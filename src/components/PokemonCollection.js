import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  return (
    <>
        <h1> Pokemon Collection </h1>
      <Card.Group itemsPerRow={6}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemons={pokemon} />
        ))}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
