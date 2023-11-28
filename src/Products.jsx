/* eslint-disable react/prop-types */
import ProdCard from "./components/ProdCard";

const Products = (props) => {
  return (
    <>
      <div className="flex flex-col p-4 gap-y-2">
        <h1 className="font-bold text-xl m-auto">Alla produkter</h1>
        <p className="font-light text-center pb-4">
          Utforska en värld av fantasifulla möbler och accessoarer där varje
          objekt är noga utvalt för att ge ditt hem en känsla av överdåd.
          Välkommen till Ikea+ där varje köp blir en resa in i en värld av lyxig
          fantasi!
        </p>
      </div>
<div className="flex flex-row justify-end">
<p className="p-1 font-thin">
 {props.data.length} artiklar
    </p>
</div>
      <div className="flex gap-y-3">
        <button
          value="button"
          className="bg-slate-200 hover:bg-gray-500 text-dark-gray font-bold py-2 px-4 w-32 h-10 rounded-full "
        >
          Sortera
        </button>
        <button
          value="button"
          className="bg-slate-200 hover:bg-gray-500 text-dark-gray font-bold py-2 px-4 w-32 h-10 rounded-full "
        >
          Storlek
        </button>
        <button
          value="button"
          className="bg-slate-200 hover:bg-gray-500 text-dark-gray font-bold py-2 px-4 w-32 h-10 rounded-full "
        >
          Färg
        </button>
      </div>
      <ProdCard data={props.data} addToCart={props.addToCart} />
    </>
  );
};

export default Products;
