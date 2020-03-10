import React from 'react';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import './App.css';

function App() {
  return (
    <div className="App">
      <CartHeader />
      <CartItems />
      <CartFooter />
    </div>
  );
}

export default App;
