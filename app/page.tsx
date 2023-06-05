"use client"
import React from 'react';
import HeroSection from '../components/HeroSection';
import Image from 'next/image';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Statistics/>
      <Testimonials />
      <Pricing />
      
    </>
  );
}
