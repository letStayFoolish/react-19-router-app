import React from "react";
import { Link } from "react-router";

import styles from "./MainNavigation.module.css";

const MainNavigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
