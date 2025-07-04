'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth >= 1000) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="mx-auto mt-3 mb-3 px-4 sm:px-6 lg:px-8 max-w-[1615px]">
      <section className="flex justify-between items-center">
        <section className="flex left-0">
          <Image
            src="/Logo.svg"
            alt="Nexcent Logo"
            width={120}
            height={40}
            priority
          />
        </section>
        
        {isMobile ? (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none"
          >
            <Image 
              src={isMenuOpen ? "/close.svg" : "/menu.svg"} 
              alt="Menu" 
              width={24} 
              height={24} 
            />
          </button>
        ) : (
          <section className="right-0 justify-start flex">
            <nav className="flex gap-x-6 text-black items-center text-[16px]">
              <Link href="/">Home</Link>
              <Link href="/">Features</Link>
              <Link href="/">Community</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Pricing</Link>
            </nav>
            <button className="items-center ml-6 flex w-auto h-[40px] bg-primary rounded-[2.78px] text-[16px] px-5">
              Register Now
              <Image 
                src="/Right.svg" 
                alt="Arrow right" 
                width={12} 
                height={12} 
                className="ml-1.5" 
              />
            </button>
          </section>
        )}
      </section>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="mt-4 pb-4">
          <nav className="flex flex-col gap-y-4">
            <Link href="/" className="text-black py-2">Home</Link>
            <Link href="/" className="text-black py-2">Features</Link>
            <Link href="/" className="text-black py-2">Community</Link>
            <Link href="/" className="text-black py-2">Blog</Link>
            <Link href="/" className="text-black py-2">Pricing</Link>
            <button className="items-center flex w-auto h-[40px] bg-primary rounded-[2.78px] text-[16px] px-5 justify-center mt-2">
              Register Now
              <Image 
                src="/Right.svg" 
                alt="Arrow right" 
                width={12} 
                height={12} 
                className="ml-1.5" 
              />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}