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
import Team from '../components/Team';
import { Fade } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Fade in transition={{ enter: { duration: 5 }}}> 
        <HeroSection />
      
      <br /> 
      
        <Statement/>
     
      <br /> 
      </Fade>
        <Features />
     
      <br /> 
      
        <Product />
      
      <br /> 
      
        <Whitepaper />
      
      <Team />
      
    </>
  );
}
