import React from "react";
import CartItem from "./CartItem";

const CartItems = ({ cartData }) => {
  const cartItemsList = cartData.map(cartItem => {
    return (
      <CartItem
        key={cartItem.id}
        product={cartItem.product}
        quantity={cartItem.quantity}
      />
    );
  });
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItemsList}
      </div>
    </div>
  );
};

export default CartItems;
