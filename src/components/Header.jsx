import React from "react";
import Filters from "./Filters";

const Header = ({ chageFilters }) => {
  return (
    <header>
      <h1>Shopping Cart 🛒</h1>

      <Filters onChange={chageFilters} />
    </header>
  );
};

export default Header;
