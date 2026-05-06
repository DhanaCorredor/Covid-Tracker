import React from "react";


export const StatCard = ({ title, value, change, color }) => {
  const styles = {
    red: "bg-red-50 text-red-500",
    orange: "bg-orange-50 text-orange-500",
    green: "bg-green-50 text-green-600 border border-green-500",
    blue: "bg-blue-50 text-blue-600",
  };

  return (
    <div className={`rounded-md p-3 flex justify-between  ${styles[color]} mb-4`}>
      <div>
        <p className="text-heading-sm--font-weight: 600">{title}</p>
        {change && (
          <span className="text-xs bg-white px-2 py-1 rounded-md ml-1 shadow">
            +{change}
          </span>
        )}
      </div>

      <h2 className="text-2xl font-bold">
        {value}
      </h2>
    </div>
  );
};