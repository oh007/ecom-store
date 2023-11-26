// App.jsx

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Checkout from './Checkout';
import Header from './components/Header';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const newCartItem = {
      id: product.prodNumber,
      img: product.img,
      title: product.title,
      price: product.price,
      quantity: 1,
    };
  
    const existingCartItemIndex = cartItems.findIndex((item) => item.id === newCartItem.id);
  
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, newCartItem]);
    }
  };
  
  // Uppdatera local storage varje gång cartItems ändras
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  console.log(cartItems,"Kundvagn")
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Home cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route
            path="/products"
            element={<Products cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route
            path="/about"
            element={<About cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems}/>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
