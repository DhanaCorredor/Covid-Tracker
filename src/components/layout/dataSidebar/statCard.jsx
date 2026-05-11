import { styles } from "../../../constants/SidebarData";
import { formatNumber } from '../../../utils/format'


export const StatCard = ({ title, value, change, color }) => {
  
   

  return (
    <div 
      className={`
        flex justify-between items-center mb-3 p-3 rounded-xs shadow-sm 
        border-2 border-transparent 
        transform transition-all duration-500 ease-in-out hover:-translate-y-1
        ${styles[color]} 
      `}
    >
      <div className="flex items-center gap-10">
        <p className="text-display-md font-semibold text-blue-950 whitespace-nowrap">{title}</p>
        
        {(change !== undefined) && (
          <div className="flex items-center text-body-sm mr-3 bg-white text-gray-400 px-1 rounded">
            <span className="mr-0.5">+</span>
            {change}
          </div>
        )}
      </div>

      <h2 className="text-heading-xl font-semibold tracking-tight">
        {formatNumber(value)}
      </h2>
    </div>
  );
};