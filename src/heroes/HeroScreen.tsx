import React, { FunctionComponent, useMemo } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import getHeroById from "./../selectors/getHeroById";

const HeroScreen: FunctionComponent = () => {
  const history = useHistory();
  const { heroid } = useParams<{ heroid: string }>();
  const hero = useMemo(() => getHeroById(heroid), [heroid]);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const {
    id,
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters,
  } = hero;

  const handleReturn: () => void = () => {
    if (history.length <= 3) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__flipInY ">
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8 animate__animated animate__backInRight">
        <h3> {superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
