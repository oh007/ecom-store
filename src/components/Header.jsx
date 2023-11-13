
export default function Header() {
  return (
    <header className="flex flex-row items-center bg-customGreen">
        <img src="src/assets/images/company-logo.png" alt="company-logo" className="w-40 h-40" />
        <ul className="flex flex-row gap-5">
            <li>Hem</li>
            <li>Om oss</li>
            <li>Butik</li>
        </ul>
    </header>
  )
}
