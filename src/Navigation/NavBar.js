import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <nav>
    <Link to="/">
      <h1 className="app-heading">Members-Only Page</h1>
    </Link>
  </nav>
);
