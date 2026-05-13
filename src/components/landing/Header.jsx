import { Link } from "react-router-dom";
import { useGlobalTotals } from "../../hooks/useGlobalTotals";

export const Header = () => {
  const { data: globalData, loading } = useGlobalTotals();

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <div className="bg-[url('/images/bg-header.webp')] bg-cover bg-center w-full pb-12">
        {/* Navbar Placeholder */}
        <nav className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4 gap-4 md:px-8">
          <div className="flex items-center gap-2">
            <img src="/images/coronavirus.png" alt="logo" className="w-8 h-8 object-contain brightness-0 invert" />
            <span className="text-2xl font-bold text-neutral-0">COVIMAP</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-medium text-neutral-0/90">
            <Link to="/" className="transition-colors duration-300 hover:text-purple-300">Home</Link>
            <Link to="/" className="transition-colors duration-300 hover:text-purple-300">Prevention</Link>
            <Link to="/" className="transition-colors duration-300 hover:text-purple-300">Quarantine</Link>
            <Link to="/" className="transition-colors duration-300 hover:text-purple-300">Contact</Link>
            <Link to="/dashboard" className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-neutral-0 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-1">
              Dashboard
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between py-12 px-4 gap-8 md:gap-6 md:px-8">
          <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start md:pr-4">
            <h1 className="text-3xl font-extrabold text-neutral-0 mb-6 leading-tight sm:text-4xl lg:text-5xl">
              Stay Home, And Prayer For Victim Of Corona virus.
            </h1>
            <p className="text-sm text-purple-100 mb-8 leading-relaxed sm:text-base md:text-lg">
              Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
              <div className="bg-neutral-0 py-3 px-4 rounded-xl border border-status-cases-bg shadow-sm flex-1 sm:px-6 sm:py-4">
                <span className="block font-bold text-xl text-status-cases sm:text-2xl md:text-3xl">
                  {loading ? "..." : globalData?.cases?.toLocaleString() ?? "9,779,130"}
                </span>
                <span className="text-xs text-text-secondary sm:text-sm md:text-base">Total Cases</span>
              </div>
              <div className="bg-neutral-0 py-3 px-4 rounded-xl border border-status-recovered-bg shadow-sm flex-1 sm:px-6 sm:py-4">
                <span className="block font-bold text-xl text-status-recovered sm:text-2xl md:text-3xl">
                  {loading ? "..." : globalData?.recovered?.toLocaleString() ?? "92,966"}
                </span>
                <span className="text-xs text-text-secondary sm:text-sm md:text-base">Total Recovered</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start w-full">
              <Link to="/dashboard" className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-neutral-0 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-1">
                View Live Dashboard
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0">
               <img src="/images/header.webp" alt="Hero Illustration" className="w-full max-h-[50vh] md:max-h-[70vh] object-contain drop-shadow-2xl rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};