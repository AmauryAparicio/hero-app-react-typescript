import Heroes from "../Heroes";
import { iHeroes } from "../Interfaces";

const getHeroesByName: (name: string) => Array<iHeroes> | [] = (name = "") => {
  if (name === "") {
    return [];
  }
  name = name.toLocaleLowerCase();
  return Heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};

export default getHeroesByName;
