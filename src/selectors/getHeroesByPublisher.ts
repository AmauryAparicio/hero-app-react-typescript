import Heroes from "../Heroes";
import { iHeroes } from "../Interfaces";

const getHeroesByPublisher: (publisher: string) => Array<iHeroes> = (
  publisher
) => {
  const validPublishers: Array<string> = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return Heroes.filter((hero) => hero.publisher === publisher);
};

export default getHeroesByPublisher;
