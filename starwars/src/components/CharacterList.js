import React from "react";
import StarWarsCharacter from "./StarWarsCharacter";
import "./StarWars.css";

const CharacterList = props => {
  return (
    <div className="character-list">
      {props.starwarsChars.map(item => (
        <StarWarsCharacter key={item.name} item={item} />
      ))}
    </div>
  );
};

export default CharacterList;
