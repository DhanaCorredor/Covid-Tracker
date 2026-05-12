import './Header.css';

export const Header = () => {
  return (
    
    <div id="home" className="header-container flex flex-col items-center">
      <div className="w-full header-background pb-12">
        {/* Navbar Placeholder */}
        <nav className="w-full max-w-7xl mx-auto flex flex-row justify-between items-center py-6 px-4 md:px-8 gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/covid-blue.svg" alt="logo" className="w-8 h-8 object-contain brightness-0 invert" />
            <h1 className="text-2xl font-bold text-white">COVIMAP</h1>
          </div>
          <div className="flex gap-8 font-medium text-white/90">
            <a href="#home" className="hover:text-blue-300 transition-colors">Home</a>
            <a href="#prevention" className="hover:text-blue-300 transition-colors">Prevention</a>
            <a href="#symptoms" className="hover:text-blue-300 transition-colors">Symptoms</a>
            <a href="#faqs" className="hover:text-blue-300 transition-colors">Faqs</a>
            <a href="/dashboard" className="hover:text-blue-300 transition-colors font-bold text-white">Dashboard</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-row items-start justify-between py-12 px-4 md:px-8 gap-6">
          <div className="w-3/5 text-left flex flex-col items-start pr-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Stay Home, And Prayer For Victim Of Corona virus.
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
              Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.
            </h2>
            <div className="flex flex-row gap-4 w-full">
              <div className="bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-red-100 shadow-sm flex-1">
                <span className="block text-red-500 font-bold text-xl sm:text-2xl md:text-3xl">9,779,130</span>
                <span className="text-xs sm:text-sm md:text-base text-slate-600">Total Cases</span>
              </div>
              <div className="bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-green-100 shadow-sm flex-1">
                <span className="block text-green-500 font-bold text-xl sm:text-2xl md:text-3xl">92,966</span>
                <span className="text-xs sm:text-sm md:text-base text-slate-600">Total Recovered</span>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex justify-end">
               <img src="/images/header.png" alt="Hero Illustration" className="w-full max-h-[70vh] object-contain drop-shadow-2xl rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};