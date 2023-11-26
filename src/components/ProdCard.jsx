/* eslint-disable react/prop-types */
import { data } from "/src/data/data"

export default function ProdCard(props) {
  console.log(data)
  return (
    <div className="flex flex-wrap justify-center mt-16">
      {data.map((data, index) => (
        <div
          key={index}
          id={`whoobe-3fery-${index}`}
          className="w-full md:w-64 my-4 md:mx-2 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col "
        >
          <img
            src={data.img}
            alt="img"
            title="img"
            className="w-full h-[200px] object-cover rounded-t-lg"
            id={`whoobe-ixxe5-${index}`}
          />
          <div
            id={`whoobe-1okdg-${index}`}
            className="w-full p-4 justify-start flex flex-col gap-y-5"
          >
            <h4
              className="border-b-2 text-3xl"
              id={`whoobe-3mr7n-${index}`}
            >
              {data.title}
            </h4>
            <p className="my-4" id={`whoobe-950fw-${index}`}>
              {data.description}
            </p>
            <p className="text-bold">{data.price + " sek"}</p>
            <button
              value="button"
              onClick={() => props.addToCart(data)}
              className="bg-prodButton hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
              id={`whoobe-jkkr2-${index}`}
            >
             Lägg i kundvagn
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
