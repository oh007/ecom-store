import MainCarousel from "./MainCarousel";
import ProductShowCase from "./ProductShowCase";
import { Link } from "react-router-dom";
export default function MainContent() {
  return (
  <>
    <main className="bg-customGreen p-10">
      <div className="text-center">
        <h1 className="font-bold text-white text-4xl mb-3">Moderna möbler till moderna hem</h1>

        <p className="font-light text-white text-lg">
          Vi garanterar alltid kvalitet och en stilren design till ditt hem. Med
          våran nya lyxiga kollektion IKEA+ med fokus på bekvämlighet och lyx
        </p>
      </div>
      <div className="flex justify-center gap-16 m-9">
      <Link
            to="/products"
            className="bg-ctaButton hover:bg-yellow-500 text-black font-light py-2 px-4 border border-black rounded"
          >
            Till butiken
          </Link>
        <Link
            to="/about"
            className="bg-transparent hover:bg-black text-white font-light hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          >
          
            Utforska IKEA+
          </Link>
      </div>
    </main>
    <section className="flex flex-col">
         <MainCarousel/>
    </section>
    <section className="">
        <h6 className="font-bold text-center">Utvalda produkter</h6>
        <ProductShowCase/>
    </section>
    </>
  );
}
