import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="flex flex-row items-center bg-customGreen  justify-between p-6"> 
    <Link to="/">
    <img
        src="src/assets/images/company-logo.png"
        alt="company-logo"
        className="w-20 h-20"
      />
   </Link>
     
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </header>
  );
}
