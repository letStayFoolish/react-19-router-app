import React from "react";
import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">list of products</Link>.
      </p>
    </>
  );
};

export default Home;
