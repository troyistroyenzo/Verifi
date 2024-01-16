"use client"
import React from 'react';
import HeroSection from '../components/HeroSection';
import Image from 'next/image';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Statistics from '../components/Statistics';
import Whitepaper from '../components/Whitepaper';
import Product from '../components/Product';
import Architecture from '../components/Architecture';
import Description from '../components/Description';
import Demo from '../components/Demo';
import { Fade } from "@chakra-ui/react";
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
        <title>VeriFi — Home  </title>
      </Head>
      <Fade in transition={{ enter: { duration: 5 }}}> 
        <HeroSection /> 

     

      </Fade>

      {/* <Description/> */}
      <Demo/>

      <Features />

      
     
      <br /> 
      
        <Product />

        <Architecture />
      
      <br /> 

      <Pricing/>
      
        <Whitepaper /> 
      
      
    </>
  );
}
