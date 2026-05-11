import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header-container flex flex-col items-center">
      {/* Navbar Placeholder */}
      <nav className="w-full max-w-7xl flex flex-row justify-between items-center py-6 px-4 md:px-8 gap-4">
        <div className="flex items-center gap-2">
          <img src="/images/icon2.png" alt="logo" className="w-8 h-8 object-contain rounded-full" />
          <h1 className="text-2xl font-bold text-slate-800">COVIMAP</h1>
        </div>
        <div className="flex gap-8 font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Prevención</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Cuarentena</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contacto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-7xl flex flex-row items-center justify-between py-12 px-4 md:px-8">
        <div className="w-1/2 max-w-2xl text-left flex flex-col items-start pr-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Stay Home, And Prayer For Victim Of Corona virus.
          </h1>
          <h2 className="text-lg text-slate-500 mb-8 leading-relaxed">
            Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-xl">
            <div className="bg-red-50 px-6 py-4 rounded-xl border border-red-100 shadow-sm flex-1">
              <span className="block text-red-500 font-bold text-2xl">9,779,130</span>
              <span className="text-sm text-slate-600">Total Cases</span>
            </div>
            <div className="bg-green-50 px-6 py-4 rounded-xl border border-green-100 shadow-sm flex-1">
              <span className="block text-green-500 font-bold text-2xl">92,966</span>
              <span className="text-sm text-slate-600">Total Recovered</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end pl-4">
             <img src="/images/hands_hero.png" alt="Hero Illustration" className="w-full object-cover drop-shadow-2xl rounded-3xl transform scale-105 lg:scale-110 origin-right" />
        </div>
      </div>

      {/* App Banner (Image 4) */}
      <div className="w-full max-w-6xl px-4 md:px-8 mt-16 mb-24 mx-auto">
        <div className="app-banner w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16 text-white overflow-hidden relative">
          <div className="max-w-lg z-10 w-full md:w-1/2 flex flex-col items-center text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Descarga rápidamente la app para las últimas noticias
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed font-medium">
              Los coronavirus humanos son comunes y típicamente se asocian con enfermedades leves, similares al resfriado común.
            </p>
            <button className="bg-white text-slate-800 font-bold py-3 px-8 rounded hover:bg-slate-50 transition-colors shadow-lg tracking-wide">
              DESCARGAR AHORA
            </button>
          </div>
          {/* Mockup Placeholder */}
          <div className="mt-12 md:mt-0 z-10 w-64 h-auto flex flex-col items-center justify-center relative shrink-0 mx-auto">
            <img src="/images/telephone.svg" className="w-full h-full object-contain drop-shadow-2xl" alt="App Mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};