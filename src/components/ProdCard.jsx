/* eslint-disable react/prop-types */
import { useState } from 'react';
import { data } from "/src/data/data";
import { Link } from "react-router-dom";

export default function ProdCard(props) {
  const [addToCartMessage, setAddToCartMessage] = useState('');

  const handleAddToCart = (product) => {
    props.addToCart(product);

    setAddToCartMessage(`Du har lagt till ${product.title} i kundvagnen`);

    setTimeout(() => {
      setAddToCartMessage('');
    }, 5000);
  };

  return (
    <div className="flex flex-wrap justify-center mt-4 relative">
      {data.map((product, index) => (
        <div
          key={index}
          id={`whoobe-3fery-${index}`}
          className="w-full md:w-64 my-4 md:mx-2 justify-center items-center border border-slate-200 bg-white rounded-lg flex flex-col"
        >
          <img
            src={product.img}
            alt="img"
            title="img"
            className="w-full h-[200px] object-cover rounded-t-lg"
            id={`whoobe-ixxe5-${index}`}
          />
          <div
            id={`whoobe-1okdg-${index}`}
            className="w-full p-4 justify-start flex flex-col gap-y-5"
          >
            <h4
              className="border-b-2 text-3xl"
              id={`whoobe-3mr7n-${index}`}
            >
              {product.title}
            </h4>
            <p className="my-4" id={`whoobe-950fw-${index}`}>
              {product.description}
            </p>
            <h4 className="font-bold text-xl">{product.price + ":-"}</h4>
            <button
              value="button"
              onClick={() => handleAddToCart(product)}
              className="bg-prodButton hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
              id={`whoobe-jkkr2-${index}`}
            >
             Lägg i kundvagn
            </button>
          </div>
        </div>
      ))}
    {addToCartMessage && (
  <div className="fixed top-0 w-full bg-gray-800 text-white p-4 flex items-start justify-between">
    <span>{addToCartMessage}</span>
    <Link to="/checkout" className="text-blue-300">
      Visa
    </Link>
  </div>
)}
    </div>
  );
}
