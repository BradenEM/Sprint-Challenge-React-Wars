import React from "react";
import "./StarWars.css";

function capFirstLetter(string) {
  if (string === "n/a") {
    return string.toUpperCase();
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

const StarWarsCharacter = props => {
  return (
    <div className="character">
      <div>
        <h2 className="character-name">{props.item.name}</h2>
        <div className="info">
          <p className="info-p">
            <strong>Gender: </strong>
            {capFirstLetter(props.item.gender)}
          </p>
          <p className="info-p">
            <strong>Birth Year: </strong>
            {capFirstLetter(props.item.birth_year)}
          </p>
          <p className="info-p">
            <strong>Height: </strong>
            {Math.round(props.item.height * 0.0328084 * 10) / 10}'
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarWarsCharacter;
