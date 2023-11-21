import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import data from "/src/data/data.js"

console.log(data,"datan")
export default function MainCarousel() {
  return (
    <>

<div className='pb-28'>

  
  
<Slider autoplay={3000}>
{data.map((data, index) => (
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
<button className='bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full'>Utforska IKEA+</button>
</div>
    </>
  )
}
