import MainCarousel from "./MainCarousel";
import ProductShowCase from "./ProductShowCase";

export default function MainContent() {
  return (
  <>
    <main className="bg-customGreen p-14">
      <div className="text-center">
        <h1 className="font-bold text-white">Moderna möbler till moderna hem</h1>

        <p className="font-light text-white">
          Vi garanterar alltid kvalitet och en stilren design till ditt hem. Med
          våran nya lyxiga kollektion IKEA+ med fokus på bekvämlighet och lyx
        </p>
      </div>
      <div className="flex justify-center gap-16 m-9">
        <button className="bg-ctaButton hover:bg-yellow-500 text-black font-light py-2 px-4 border border-black rounded">Till butiken</button>
        <button className="bg-transparent hover:bg-black text-white font-light hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">Utforska IKEA+</button>
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
