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
      },
      {
        path: "/hero/:heroid",
        component: HeroScreen,
      },
      {
        path: "/dc",
        component: DcScreen,
      },
      {
        path: "/search",
        component: SearchScreen,
      },
    ],
  },
];

export default Routes;
