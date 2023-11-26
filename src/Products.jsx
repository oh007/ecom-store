/* eslint-disable react/prop-types */
import ProdCard from "./components/ProdCard";


const Products = (props) => {
  return (
    <>
    <h1>All products</h1>
    <ProdCard  addToCart={props.addToCart} />
    </>
  );
};

export default Products;