import React, { useState } from "react";

export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);


  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };



  return (
    <>
          <div 
        className="rounded-full w-72 h-72  absolute blur-2xl"
        style={{left: '40%' ,  backgroundColor: '#AA2A2A'} }
      >

      </div>
      {/* carousel */}
      <div className="slideC  h-auto overflow-hidden lg:overflow-visible">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide w-96 h-96"
              style={{
                background: item.bgColor,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </div>

          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns flex justify-center gap-x-4 my-4">


        {
          activeSlide === 0 ? (

            <button
              className="btn bg-gray-200 rounded-full  ease-in duration-200 opacity-35"
              onClick={prev}
              disabled
            >
              <div className="flex justify-center items-center gap-1.5 py-2 px-4">
                <svg class="icon icon-tabler icon-tabler-arrow-narrow-left " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                <span className="m-0 text-stone-900 font-medium">Anterior</span>
              </div>


            </button>

          ) :
            <button
              className="btn bg-gray-200 rounded-full  hover:bg-gray-300 ease-in duration-200"
              onClick={prev}
            >
              <div className="flex justify-center items-center gap-1.5 py-2 px-4">
                <svg class="icon icon-tabler icon-tabler-arrow-narrow-left " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                <span className="m-0 text-stone-900 font-medium">Anterior</span>
              </div>


            </button>
        }


        {
          activeSlide === 3 ? (
            <button
              className="btn bg-gray-200 rounded-full ease-in duration-200 opacity-35"
              onClick={next}
              disabled
            >
              <div className="flex justify-center flex-row-reverse gap-1.5 py-2 px-4">
                <svg class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                <span className="m-0 text-stone-900 font-medium">Siguiente</span>
              </div>
            </button>
          ) :
            <button
              className="btn bg-gray-200 rounded-full  hover:bg-gray-300 ease-in duration-200"
              onClick={next}
            >
              <div className="flex justify-center flex-row-reverse gap-1.5 py-2 px-4">
                <svg class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                <span className="m-0 text-stone-900 font-medium">Siguiente</span>
              </div>
            </button>
        }


      </div>



    </>
  );
};

const SliderContent = (props) => {
  return (
    <div className="p-4 overflow-hidden w-full">

      <img
        src={props.icon}
        alt="img-marca"
        className="w-20 m-auto"
      />
      <div className="my-4 flex flex-col	items-center">
        <p className="m-auto font-medium text-stone-900 text-md text-pretty ">{props.title}</p>
        <span className="font text-stone-700 text-md text-pretty">{props.subtitle}</span>

      </div>

      <p className="text-center text-stone-700 text-md text-pretty px-1">{props.desc}</p>
    </div>
  );
};
