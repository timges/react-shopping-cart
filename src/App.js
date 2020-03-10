import React from "react";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import "./App.css";

function App() {
  const cartItemsList = [
    {
      id: 1,
      product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      quantity: 1
    },
    {
      id: 2,
      product: { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      quantity: 2
    },
    {
      id: 3,
      product: { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      quantity: 1
    }
  ];

  return (
    <div className="App">
      <CartHeader />
      <CartItems cartData={cartItemsList}/>
      <CartFooter copyright="2020" />
    </div>
  );
}

export default App;
