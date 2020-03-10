import React from "react";

const CartItem = ({product, quantity}) => {
  return (
    <div class="list-group-item">
      <div class="row">
        <div class="col-md-8">{product.name}</div>
        <div class="col-md-2">{product.priceInCents}</div>
        <div class="col-md-2">{quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
