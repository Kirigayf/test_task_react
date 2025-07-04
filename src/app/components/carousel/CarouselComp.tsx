'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton } from './EmblaDots';
import './embla.css';

export default function CarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const slides = [
    {
      title: <>Lessons and insights <br /><span className="text-[#4CAF4F]">from 8 years</span></>,
      description: "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      image: "/Illustration.svg"
    },
    {
      title: <>Another Great Lesson <br /><span className="text-[#4CAF4F]">from our journey</span></>,
      description: "Discover new ways to improve your workflow.",
      buttonText: "Learn More",
      image: "Illustration.svg"
    },
    {
      title: <>Explore Your Potential <br /><span className="text-[#4CAF4F]">with Nextcent</span></>,
      description: "Join a community of forward-thinking professionals.",
      buttonText: "Get Started",
      image: "Illustration.svg"
    }
  ];

  return (
    <section className="bg-[#F5F7FA] -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-36 flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 grid gap-y-10 sm:gap-y-20 w-full">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                <div className="flex flex-col lg:flex-row items-center justify-center min-h-[300px] sm:min-h-[400px] w-full">
                  <div className="lg:w-3/5 w-full text-center px-4 sm:px-0 lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#4D4D4D] leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-[#717171] my-4 text-[16px] sm:text-[16px] lg:text-[16px] xl:text-[16px] leading-tight">
                      {slide.description}
                    </p>
                    <button className="bg-[#4CAF4F] hover:bg-green-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded text-sm sm:text-base">
                      {slide.buttonText}
                    </button>
                  </div>
                  <div className="lg:w-2/5 w-full mt-8 lg:mt-0 flex justify-center">
                    <div className="relative w-full h-48 sm:h-64 lg:h-80">
                      <Image
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__dots flex justify-center mt-8 sm:mt-15">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}