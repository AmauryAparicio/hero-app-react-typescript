import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import getHeroById from "./../selectors/getHeroById";

const HeroScreen: FunctionComponent = (): JSX.Element => {
  const { heroid } = useParams<{ heroid: string }>();
  const hero = getHeroById(heroid);
  return (
    <div>
      <h1>Hero {hero?.id}</h1>
    </div>
  );
};

export default HeroScreen;
