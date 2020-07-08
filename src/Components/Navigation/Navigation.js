import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      {routes.map(({ label, path, isExact, isInNavMenu }) =>
        isInNavMenu ? (
          <NavLink
            className={styles.navigation_link}
            activeClassName={styles.navigation_activeLink}
            key={label}
            to={path}
            exact={isExact}
          >
            {label}
          </NavLink>
        ) : null
      )}
    </>
  );
};

export default Navigation;
