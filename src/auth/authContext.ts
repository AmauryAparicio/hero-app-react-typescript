import { createContext } from "react";
import { iAuthContext } from './../Interfaces';

const AuthContext = createContext<iAuthContext | undefined>(undefined);

export default AuthContext;
