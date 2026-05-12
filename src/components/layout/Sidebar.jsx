import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { navItems } from "../../../constants/navicon";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white text-slate-800 min-h-screen p-6 border-r border-slate-200 shadow-sm flex flex-col hidden md:flex">
      <div className="flex items-center gap-3 mb-10">
        <img src="/images/covid-blue.svg" alt="logo" className="w-8 h-8 object-contain" />
        <h2 className="text-2xl font-bold text-[#1C274C]">COVIMAP</h2>
      </div>
      
      <nav className="flex flex-col gap-2 flex-grow">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors font-medium ${
                isActive 
                  ? "bg-blue-50 text-blue-600 shadow-sm border border-blue-100" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon icon={item.icon} className={`w-6 h-6 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-auto pt-6 border-t border-slate-100">
        <Link 
          to="/" 
          className="flex items-center gap-4 px-4 py-3 rounded-xl transition-colors font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"
        >
          <Icon icon="mdi:home-outline" className="w-6 h-6 text-slate-400" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
