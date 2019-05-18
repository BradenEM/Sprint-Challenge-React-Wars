import React from "react";
import "./StarWars.css";

const StarWarsCharacter = props => {
  return (
    <div className="character">
      <div>
        <h2>{props.item.name}</h2>
        <div className="info">
          <h3>{props.item.gender}</h3>
        </div>
      </div>
    </div>
  );
};

export default StarWarsCharacter;
