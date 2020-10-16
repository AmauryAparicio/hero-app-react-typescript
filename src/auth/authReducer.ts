import { iAction, iAuthState, iLogin } from "../Interfaces";
import { authActions } from './../types/types';

const authReducer = (state: iAuthState | {} = {}, {payload, type}: iAction<iLogin>): iAuthState | {} => {
  const {login, logout} = authActions;
  switch (type) {
    case login:
      return {
        ...payload,
        logged: true
      }
    case logout:
      return {
        logged: false
      }
    default:
      return state;
  }
}

export default authReducer
