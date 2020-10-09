import Heroes from "../Heroes";
import { iHeroes } from "../Interfaces";

const getHeroById: (id: string) => iHeroes | undefined = (id) => {
  return Heroes.find((hero) => hero.id === id);
};

export default getHeroById;
