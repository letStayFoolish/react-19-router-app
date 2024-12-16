import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import React from "react";
import RootLayout from "./pages/RootLayout.tsx";

/**
 * https://reactrouter.com/start/library/routing
 */

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default App;
