import React from "react";


export const StatCard = ({ title, value, change, color, isActive }) => {

    return (

    <article>
      <header>
        <h2 className="text-xl font-bold text-slate-800 ">
          {title}
        </h2>
      </header>

      <div className="flex items-center gap-4">
        {change !== undefined && (
          <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-slate-400 border border-slate-100">
            +{change.toLocaleString()}
          </span>
        )}

        <data 
          value={value} 
          className="text-3xl font-black" 
        >
          {value.toLocaleString()}
        </data>
      </div>
    </article>
  );
};

