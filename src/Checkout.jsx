/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Cart = ({ cartItems: initialCartItems }) => {
  // Hämta sparade cartItems från localStorage när komponenten mountas
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItems = savedCartItems || initialCartItems;

  // Uppdatera localStorage varje gång cartItems ändras
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold m-auto">Varukorg</h1>
      <ul className="p-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b p-2"
          >
            <div className="flex items-center gap-2 m-8">
              <img
                src={item.img} // Anta att det finns en bild-URL i ditt item-objekt
                alt={item.title}
                className="w-10 h-10 object-cover rounded"
              />
              <h5 className="text-sm">{item.title}</h5>
            </div>
            <div className="flex items-center gap-x-4 m-4">
              <h6 className="text-sm">{item.price}:- sek</h6>
              <h6 className="text-sm"> Antal:{item.quantity}</h6>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col m-auto">
      <button
        value="button"
        className="bg-green-600 hover:bg-gray-500 text-white font-bold py-2 px-4 w-80 h-12 rounded-full "
      >
       Betala
      </button>
      </div>
     
    </div>
  );
};

export default Cart;
