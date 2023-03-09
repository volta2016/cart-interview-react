import React from "react";
import Filters from "./Filters";

const Header = ({ changeFilters }) => {
  return (
    <header>
      <h1>Shopping Cart 🛒</h1>

      <Filters onChange={changeFilters} />
    </header>
  );
};

export default Header;
