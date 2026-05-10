import React from 'react'
import { formatNumber } from  '../../../utils/format'


export const CountryRow = ({ flag, name, value }) => {
  return (
    <div className="flex items-center justify-between gap-4  w-full mb-2 p-4  transform transition-all duration-500 ease-in-out hover:-translate-y-1 bg-white rounded-xs shadow-sm border border-gray-100 mb-2">
      <div className="flex items-center gap-4">
        <img 
          src={flag} 
          alt={name} 
          className="w-10 h-7 rounded-sm object-cover shadow-sm" 
        />
        <h3 className="text-heading-sm font-medium ">
          {name}
        </h3>
      </div>
      
      <p className="text-heading-md font-semibold text-blue-950">
        {formatNumber(value)}
      </p>
    </div>
  );
};