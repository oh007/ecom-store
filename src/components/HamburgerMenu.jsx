import { useState } from "react";
import "./HamburgerMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`text-white focus:outline-none ${isOpen ? "hidden" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      <div
        className={`menu-container ${
          isOpen ? "open" : ""
        } z-50 fixed top-0 left-0 w-full h-full`}
      >
        <div className="bg-white p-4 z-50 h-full flex flex-col">
          <div className="flex flex-row justify-between">
            <Link to="/">
              <img
                src="src/assets/images/company-logo.png"
                alt="company-logo"
                className="w-20 h-20"
              />
            </Link>
            <button onClick={toggleMenu} className="">
              <FontAwesomeIcon icon={faX} size="xl" />
            </button>
          </div>
          <div className="mt-12">
            <ul className="list-none p-0 m-0 flex flex-col gap-5">
              <li>
                <Link onClick={toggleMenu} to="/">Home</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/products">Products</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/about">About</Link>
              </li>
              <li>
                <Link onClick={toggleMenu}   to="/checkout">Checkout</Link>
              </li>
            </ul>
          </div>
          <div className="sec-links mt-12">
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li>
               Kundservice
              </li>
              <li>
                Följ min order
              </li>
              <li>
                Vanliga frågor
              </li>
              <li>
             Second hand
              </li>
              <li>
              IKEA Restaurang och Bistro
              </li>
              <li>
                IKEA Family
              </li>
              <li>
                IKEA Önskelista
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
