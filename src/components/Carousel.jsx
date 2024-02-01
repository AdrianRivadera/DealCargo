
import data from "./data";
import "./stylesCarousel.css";
import Slider from "./Slider";

function Carousel() {


  return (
    <>
      <div className="center mt-20 mb-10">
        <Slider data={data} activeSlide={1}  />
      </div>
    </>
  )
}

export default Carousel