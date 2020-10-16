import LoginScreen from "../login/LoginScreen";
import DashboardRouter from "./DashboardRouter";
import MarvelScreen from "./../marvel/MarvelScreen";
import HeroScreen from "./../heroes/HeroScreen";
import DcScreen from "./../dc/DcScreen";
import SearchScreen from "./../search/SearchScreen";
import { routesType } from "../types/types";
import { iRoutes } from './../Interfaces';

const {hidden, auth} = routesType

const Routes: Array<iRoutes> = [
  {
    path: "/login",
    component: LoginScreen,
    type: hidden
  },
  {
    path: "/",
    component: DashboardRouter,
    type: auth,
    routes: [
      {
        path: "/marvel",
        component: MarvelScreen,
        type: auth
      },
      {
        path: "/hero/:heroid",
        component: HeroScreen,
        type: auth,
      },
      {
        path: "/dc",
        component: DcScreen,
        type: auth,
      },
      {
        path: "/search",
        component: SearchScreen,
        type: auth,
      },
    ],
  },
];

export default Routes;
