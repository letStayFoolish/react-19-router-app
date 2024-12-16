import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation.tsx";

import styles from "./RootLayout.module.css";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
