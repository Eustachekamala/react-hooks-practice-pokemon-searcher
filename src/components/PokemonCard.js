import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemons }) {
  const [showFront, setShowFront] = useState(true);

  const toggleShowFront = () => {
    setShowFront(!showFront);
  };

  return (
    <Card>
      <div>
        <div className="image" onClick={toggleShowFront}>
          <img alt={pokemons.name} src={showFront ? pokemons.sprites.front : pokemons.sprites.back} />
        </div>
        <div className="content">
          <div className="header">{pokemons.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" /> HP: {pokemons.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
