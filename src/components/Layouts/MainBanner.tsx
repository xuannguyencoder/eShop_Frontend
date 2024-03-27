"use client"
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsDot } from 'react-icons/bs';

const MainBanner = () => {
  const slides = [
    {
      url: '/images/banner_1.jpg',
    },
    {
      url: '/images/banner_2.jpg',
    },
    {
      url: '/images/banner_3.jpg',
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='max-w-[1400px] h-[500px] w-full m-auto py-5 relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
        <div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className='text-2xl cursor-pointer'
          >
            <BsDot />
          </div>
        ))}

        </div>
    </div>
  );
};

export default MainBanner