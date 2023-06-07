"use client"
import React from 'react';
import HeroSection from '../components/HeroSection';
import Image from 'next/image';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Statistics from '../components/Statistics';
import Statement from '../components/Statement';
import Whitepaper from '../components/Whitepaper';
import Product from '../components/Product';

export default function Home() {
  return (
    <>
        <HeroSection />
      <br /> {/* Break between modules */}
      <Statement/>
      <br /> {/* Break between modules */}
      <Features />
      <br /> {/* Break between modules */}
      <Product />
      <br /> {/* Break between modules */}
      <Whitepaper />
      <br /> {/* Break between modules */}  
      {/* <Statistics/> */}
      <br /> {/* Break between modules */}
      {/* <Pricing /> */}
    </>
  );
}
