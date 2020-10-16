import React, { FunctionComponent, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import AuthContext from "../auth/authContext";
import { iAuthContext } from "../Interfaces";
import { authActions } from "../types/types";
import { iAuthState } from "./../Interfaces";

const Navbar: FunctionComponent = () => {
  const { user, dispatch } = useContext(AuthContext) as iAuthContext;
  const { name } = user as iAuthState;
  const { replace } = useHistory();
  const handleLogout = () => {
    dispatch({
      type: authActions.logout,
    });
    replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <p className="mb-0 nav-link nav-item text-info">{name}</p>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
