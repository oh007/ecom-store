/* eslint-disable react/prop-types */
import MainCarousel from "./components/MainCarousel";
import ProdCard from "./components/ProdCard";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <main className="bg-customGreen p-10">
        <div className="text-center">
          <h1 className="font-bold text-white text-4xl mb-3">
            Moderna möbler till moderna hem
          </h1>

          <p className="font-light text-white text-lg">
            Vi garanterar alltid kvalitet och en stilren design till ditt hem.
            Med våran nya lyxiga kollektion IKEA+ med fokus på bekvämlighet och
            lyx
          </p>
        </div>
        <div className="flex justify-center gap-16 mt-8">
          <button className="bg-ctaButton hover:bg-yellow-500 font-semibold  text-black border border-black rounded w-64 h-16 p-3">
            {" "}
            <Link to="/products" className="text-sm">
              Till butiken
            </Link>
          </button>
          <button className="bg-transparent hover:bg-black font-semibold text-white hover:text-white  border border-white hover:border-transparent rounded w-64 h-16 p-3">
            <Link to="/about" className="text-sm">
              Utforska IKEA+
            </Link>
          </button>
        </div>
      </main>
      <section className="flex flex-col">
        <MainCarousel imageData={props.imageData} />
        <div className="flex flex-col items-center gap-y-8">
          <h4 className="font-bold">Skapad med exlusiva material</h4>
          <p className="text-center">
            Vi har valt att lägga fokus på dom mest exlusiva materailen man kan
            få tag på. Läs mer om IKEA+
          </p>

          <Link
            to="/products"
            className="bg-transparent hover:bg-black text-white font-light hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          >
            Utforska IKEA+
          </Link>
        </div>
      </section>
      <section className="">
        <h6 className="font-bold text-center">Utvalda produkter</h6>
        <ProdCard  data={props.data} addToCart={props.addToCart} />
      </section>
    </>
  );
};

export default Home;
