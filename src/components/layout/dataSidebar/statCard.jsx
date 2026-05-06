import React from "react";

export const StatCard = ({ title, value, change, color }) => {
   const styles = {
    red: "bg-[#FEE2E2] text-[#DC2626] hover:border-[#DC2626] hover:shadow-lg", 
    orange: "bg-[#FFEDD5] text-[#f4a261] hover:border-[#f4a261] hover:shadow-lg",
    green: "bg-[#DCFCE7] text-[#22C55E] hover:border-[#22C55E] hover:shadow-lg",
    blue: "bg-[#f0f7ff] text-[#3B82F6] hover:border-[#3B82F6] hover:shadow-lg", 
  };

  return (
    <div 
      className={`
        flex justify-between items-center mb-5 p-6 rounded-sm shadow-sm
        border-2 border-transparent 
        transform transition-all duration-500 ease-in-out hover:-translate-y-1
        ${styles[color]} 
      `}
    >
      <div className="flex items-center  gap-5">
        <p className="text-xl font-bold text-blue-950">{title}</p>
        
        {(change !== undefined) && (
          <div className="flex  items-center bg-white  px-1 py-2 rounded shadow-sm text-sm font-bold text-gray-400">
            <span className="mr-0.5">+</span>
            {change}
          </div>
        )}
      </div>

      <h2 className="text-4xl font-bold tracking-tight">
        {value}
      </h2>
    </div>
  );
};