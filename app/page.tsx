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
import { Fade } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Fade in transition={{ enter: { duration: 1 } }}> 
        <HeroSection />
      </Fade>
      <br /> 
      <Fade in transition={{ enter: { duration: 2 } }}>
        <Statement/>
      </Fade>
      <br /> 
      <Fade in transition={{ enter: { duration: 4 } }}>
        <Features />
      </Fade>
      <br /> 
      <Fade in transition={{ enter: { duration: 6 } }}>
        <Product />
      </Fade>
      <br /> 
      <Fade in transition={{ enter: { duration: 8 } }}>
        <Whitepaper />
      </Fade>
      <br /> {/* Break between modules */}  
      {/* <Statistics/> */}
      <br /> {/* Break between modules */}
      {/* <Pricing /> */}
    </>
  );
}
