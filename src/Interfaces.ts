import { FunctionComponent } from "react";

export interface iRoutes {
  path: string;
  component: FunctionComponent<{ routes?: Array<iRoutes> }>;
  routes?: Array<iRoutes>;
}

export interface iHeroes {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}
