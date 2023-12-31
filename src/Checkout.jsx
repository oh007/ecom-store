/* eslint-disable react/prop-types */

/* Need 2 fix bug with multible removing */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItems: initialCartItems, setCartItemCount }) => {
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(
    savedCartItems || initialCartItems
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);

    setCartItemCount((prevCount) => Math.max(prevCount - 1, 0));
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold m-auto">Varukorg</h1>
      {cartItems.length > 0 ? (
        <ul className="p-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b p-2"
            >
              <div className="flex items-center gap-2 m-8">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded"
                />
                <h5 className="text-sm">{item.title}</h5>
              </div>
              <div className="flex items-center gap-x-4 m-4">
                <h6 className="text-sm">{item.price}:- sek</h6>
                <h6 className="text-sm"> Antal:{item.quantity}</h6>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl font-semibold m-auto mt-8">
          Du har inga varor i din kundvagn
        </p>
      )}
      {cartItems.length > 0 && (
        <div className="flex flex-col m-auto">
          <button
            value="button"
            className="bg-green-600 hover:bg-gray-500 text-white font-bold py-2 px-4 w-80 h-12 rounded-full "
          >
            Betala
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
