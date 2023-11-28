/* eslint-disable react/prop-types */
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default function MainCarousel(props) {
  return (
    <>
      <div className="pb-16">
        <Slider autoplay={3000}>
          {props.imageData.map((data, index) => (
            <img key={index} src={data.img} alt={`Bild ${index + 1}`} />
          ))}
        </Slider>
      </div>
    </> 
  );
}
