
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <header className="flex flex-row items-center bg-customGreen  justify-between p-6">
      <img
        src="src/assets/images/company-logo.png"
        alt="company-logo"
        className="w-20 h-20"
      />
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
      <ul className="hidden md:flex flex-row gap-5">
        <li>Hem</li>
        <li>Om oss</li>
        <li>Butik</li>
      </ul>
    </header>
  );
}
