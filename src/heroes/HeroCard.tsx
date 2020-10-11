import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { iHeroes } from "../Interfaces";

const HeroCard: FunctionComponent<iHeroes> = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}): JSX.Element => {
  return (
    <div
      className="card ms-3 animate__animated animate__zoomInDown animate__fast"
      style={{ maxWidth: 540 }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"> {superhero} </h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted"> {first_appearance} </small>
            </p>
            <Link to={`./hero/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
