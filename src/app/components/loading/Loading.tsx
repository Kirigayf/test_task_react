'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import "./loading.css";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <Image 
          src="/Logo.svg" 
          alt="Loading" 
          width={480} 
          height={160}
          className="w-20 md:w-[240px] h-auto"
        />
        <div className="spinner"></div>
      </div>
    </div>
  );
}