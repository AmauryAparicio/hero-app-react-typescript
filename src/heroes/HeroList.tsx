import React, { FunctionComponent } from "react";
import getHeroesByPublisher from "./../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList: FunctionComponent<{ publisher: string }> = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
