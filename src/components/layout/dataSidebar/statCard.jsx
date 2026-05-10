import React from "react";
import { styles } from "../../../constants/SidebarData";
import { formatNumber } from '../../../utils/format'


export const StatCard = ({ title, value, change, color }) => {



  return (
    <div
      className={`
        flex justify-between items-center mb-3 p-3  rounded-xs  shadow-sm 
        border-2 border-transparent 
        transform transition-all duration-500 ease-in-out hover:-translate-y-1
        ${styles[color]} 
      `}
    >
      <p className="text-body-sm font-semibold text-blue-950 whitespace-nowrap">{title}</p>

      <h2 className="text-heading-md font-semibold tracking-tight">
        {formatNumber(value)}
      </h2>
    </div>
  );
};