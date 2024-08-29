import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };


  const handleAddPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearchChange={handleSearchChange} search={search} />
      <br />
      <PokemonCollection pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
