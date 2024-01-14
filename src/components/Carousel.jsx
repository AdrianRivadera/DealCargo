
import data from "./data";
import "./stylesCarousel.css";
import Slider from "./Slider";

function Carousel() {


  return (
    <>
      <div className="center my-20">
        <Slider data={data} activeSlide={2}  />
      </div>
    </>
  )
}

export default Carousel