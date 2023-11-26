// App.jsx

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Checkout from './Checkout';
import Header from './components/Header';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [cartItemCount, setCartItemCount] = useState(() => {
    const storedCount = localStorage.getItem('cartItemCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

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

    // Uppdatera cartItemCount i headern
    setCartItemCount((prevCount) => prevCount + 1);
  };

  // Uppdatera local storage varje gång cartItems ändras
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Uppdatera local storage varje gång cartItemCount ändras
  useEffect(() => {
    localStorage.setItem('cartItemCount', cartItemCount.toString());
  }, [cartItemCount]);
  console.log(cartItems, "Kundvagn");

  return (
    <Router>
      <div>
        <Header cartItemCount={cartItemCount} />

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
            element={<Checkout cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
