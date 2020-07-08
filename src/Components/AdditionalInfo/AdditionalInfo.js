import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./AdditionalInfo.module.css";

function AdditionalInfo({ props }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Additional information</p>
      <ul>
        {routes.map(({ label, isInAddInfo, forUrlAdd }) =>
          isInAddInfo ? (
            <li key={label}>
              <NavLink
                to={{
                  pathname: `${props.match.url}/${forUrlAdd}`,
                  state: { from: props.location },
                }}
              >
                {label}
              </NavLink>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default AdditionalInfo;
