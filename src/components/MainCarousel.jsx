import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { imageData} from "/src/data/data.js"
import { Link } from "react-router-dom";

console.log(imageData,"datan")
export default function MainCarousel() {
  return (
    <>

<div className='pb-28'>

  
  
<Slider autoplay={3000}>
{imageData.map((data, index) => (
        <img key={index} src={data.img} alt={`Bild ${index + 1}`} />
      ))}
</Slider>
</div>
    <div className="flex flex-col items-center gap-y-8">
    <h4 className='font-bold'>Skapad med exlusiva material</h4>
    <p>Vi har valt att lägga fokus
på dom mest exlusiva materailen 
man kan få tag på. 

Läs mer om IKEA+</p>

<Link
            to="/products"
            className="bg-transparent hover:bg-black text-white font-light hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          >
            Utforska IKEA+
          </Link>
</div>
    </>
  )
}
