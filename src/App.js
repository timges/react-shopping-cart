import React from "react";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";

import "./App.css";

import addableItems from './data/addableItems';
import cartList from './data/cartList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: addableItems,
      cartItemsList: cartList
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(item) { 
    //TODO: Check if item is already in cartList add them - if not increase quantity 
    const itemWithIndex = {...item, id:this.state.cartItemsList.length+1} 
      
    this.setState(prevState => {
      return {
        cartItemsList: [...prevState.cartItemsList, itemWithIndex]
      };
    });
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartData={this.state.cartItemsList} />
        <AddItem products={this.state.products} onSubmit={this.handleSubmit} />
        <CartFooter copyright="2020" />
      </div>
    );
  }
}

export default App;
