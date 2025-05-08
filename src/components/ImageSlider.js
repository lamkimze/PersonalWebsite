import React, { useState, useEffect } from 'react';
import { ArrowBigLeft, ArrowBigRight, CircleDot } from 'lucide-react';
import { Circle } from 'react-bootstrap-icons';
import Carousel from "react-multi-carousel";


function ImageSlider({ imageUrls, interval = 3000*(Math.random(2, 5)/0.5) }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage(setImageIndex, imageUrls) {
    return setImageIndex((prev) => (prev + 1) % imageUrls.length);
  }
  
  function showPrevImage(setImageIndex, imageUrls) {
    return setImageIndex((prev) => (prev > 0 ? prev - 1 : imageUrls.length - 1));
  }

  useEffect(()=> {
    if(!imageUrls || imageUrls.length === 0) return;
    const timer = setInterval(() => {
      showNextImage(setImageIndex, imageUrls);
    }, interval);
    return () => clearInterval(timer);
  }, [imageIndex, interval, imageUrls]);

  if (!Array.isArray(imageUrls) || imageUrls.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <div style={{width: "100%", height:"100%", position:"relative"}}>
      <div style={{width:"100%", height:"100%", display: "flex", overflow:"hidden"}}>
        {imageUrls.map(url => (
          <img key={url} src={url} className='img-slider-img' style={{translate: `${-100 * imageIndex}%`}} 
          />
        ))}
      </div>
      <button
        onClick={() =>
          showPrevImage(setImageIndex, imageUrls)
        }
      >
        <ArrowBigLeft className="img-slider-btn" style={{left: 0}}/>
      </button>
      <button
        onClick={() =>
          showNextImage(setImageIndex, imageUrls)
        }
      >
        <ArrowBigRight className="img-slider-btn" style={{right: 0}} />
      </button>
        <div style={
          {position: "absolute",
            bottom: "0.5rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: "0.25rem",
          }
        }>
          {imageUrls.map((_, index) => (
            <button key={index} className='img-slider-dot-btn' onClick={() => setImageIndex(index)}>{index === imageIndex ? <CircleDot/>: <Circle/>}</button>
          ))}
        </div>
    </div>
  );
}

export default ImageSlider;

