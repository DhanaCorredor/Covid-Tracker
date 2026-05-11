import React from 'react';
import { Header } from '../components/landing/Header';
import Prevention from '../components/landing/Prevention';
import Symptoms from '../components/landing/Symptoms';
import { Faqs } from '../components/landing/Faqs';

export const LandingPage = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      <Header />
      <Prevention />
      <Symptoms />
      <Faqs />
    </div>
  );
};
