import React from 'react'


export const CountryRow = ({ flag, name, value }) => {
    return (
        <>

            <li className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:bg-slate-50 transition-all">
                <div className="flex items-center gap-4">
                    <img src={flag} alt={name} className="w-8 h-5 object-cover rounded shadow-sm" />
                    <span className="font-medium text-slate-700 text-sm">{name}</span>
                </div>
                <span className="font-bold text-indigo-900 font-mono">
                    {value.toLocaleString()}
                </span>
            </li>
        </>
    );
};
