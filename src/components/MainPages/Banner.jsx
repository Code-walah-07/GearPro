import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Banner({slides}) {

  let [current,setCurrent] = useState(0);

  let previousSlide =() =>{
    if(current===0) {
      setCurrent(slides.length-1);
    }
    else{
      setCurrent(current-1);
    }
  };

  let nextSlide =() =>{
    if(current===slides.length-1) {
      setCurrent(0);
    }
    else{
      setCurrent(current+1);
    }
  };

  return (
    <div className="overflow-hidden relative">
    <div className={`flex transition ease-out duration-40`}
    style={{
      transform:`translateX(-${current*100}%)`,
    }}>
      {slides.map((s)=>{
      return <img src={s} alt="" />
    })}
    </div> 

    <div className="absolute top-0 h-full w-full justify-between items-center flex text-slate-400 px-6 text-4xl  \">
        <button onClick={previousSlide}><FaArrowAltCircleLeft/></button>
        <button onClick={nextSlide}><FaArrowAltCircleRight/></button>
    </div>
    </div>  
  );
}


export default Banner;
