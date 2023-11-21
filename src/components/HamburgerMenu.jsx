import  { useState } from 'react';
import './HamburgerMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </button>

      {isOpen && (
        <div className="absolute-full bg-white p-4 shadow-md">
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <a href="#" onClick={closeMenu}>
                Hem
              </a>
            </li>
            <li className="mb-2">
              <a href="#" onClick={closeMenu}>
                Meny
              </a>
            </li>
            <li className="mb-2">
              <a href="#" onClick={closeMenu}>
                Om oss
              </a>
            </li>
            <li className="mb-2">
              <a href="#" onClick={closeMenu}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
   </>
  );
};

export default HamburgerMenu;
