import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <h1>
        <Link to={"/cart"}>Go to Cart</Link>
      {/* <span class="material-symbols-outlined">garden_cart</span> */}
    </h1>
  );
}

export default Header;
