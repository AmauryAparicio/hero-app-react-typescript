import { iRoutes } from "../Interfaces";
import LoginScreen from "../login/LoginScreen";
import DashboardRouter from "./DashboardRouter";
import MarvelScreen from "./../marvel/MarvelScreen";
import HeroScreen from "./../heroes/HeroScreen";
import DcScreen from "./../dc/DcScreen";

const Routes: Array<iRoutes> = [
  {
    path: "/login",
    component: LoginScreen,
  },
  {
    path: "/",
    component: DashboardRouter,
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
    ],
  },
];

export default Routes;
