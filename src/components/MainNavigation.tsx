import React from "react";
import { NavLink } from "react-router";

import styles from "./MainNavigation.module.css";

const MainNavigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end // this link remains active only if its url starts && ends with "/"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
