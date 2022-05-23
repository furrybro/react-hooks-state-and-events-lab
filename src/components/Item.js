import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(true);

  function handleAddCart() {
    setAddCart((addCart) => !addCart )
  }

  const cartStatus = addCart ? "" : "in-cart";

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCart} className="add">{addCart ? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
