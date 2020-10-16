import { Dispatch, FunctionComponent } from "react";

export interface iRoutes {
  path: string;
  component: FunctionComponent<any>
  routes?: Array<iRoutes>;
  type: string
}

export interface iHeroes {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export interface iSearchForm {
  searchText: string | string[];
}

export interface iAuthContext {
  user: iAuthState | {},
  dispatch: Dispatch<iAction<iLogin>>
}

export interface iAuthState{
  logged: boolean,
  name?: string
}

export interface iAction<T>{
  payload?: T,
  type: string
}

export interface iLogin{
  name: string
}