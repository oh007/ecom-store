/* eslint-disable react/prop-types */
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faUser} from "@fortawesome/free-solid-svg-icons";

export default function Header({ cartItemCount }) {
  return (
    <header className="flex flex-row items-center bg-customGreen  justify-between p-6"> 
    <Link to="/">
    <img
        src="src/assets/images/company-logo.png"
        alt="company-logo"
        className="w-20 h-20"
      />
   </Link>
    
      <div className="flex flex-row gap-9">
        <div className=" flex flex-row gap-6">
        <FontAwesomeIcon className="self-end" icon={faUser} size="lg" style={{color: "#ffffff",}} />
      <FontAwesomeIcon className="self-end" icon={faHeart} size="lg" style={{color: "#ffffff",}} />
      <Link to="/checkout" className="self-end">
     <FontAwesomeIcon className="self-end" icon={faCartShopping} size="lg" style={{color: "#ffffff",}} />
     <span className="text-white ml-1">{cartItemCount}</span>
     </Link>
        </div>
     
        <HamburgerMenu />
      </div>
    </header>
  );
}
