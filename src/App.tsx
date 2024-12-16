import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import React from "react";
import RootLayout from "./pages/RootLayout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

/**
 * https://reactrouter.com/start/library/routing
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
