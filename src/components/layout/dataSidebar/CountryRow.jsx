import React from 'react'


export const CountryRow = ({ flag, name, value }) => {
    return (
        <>

            <li className="">
                <div className="flex items-center gap-4">
                    <img src={flag} alt={name} className="" />
                    <span className="">{name}</span>
                </div>
                <span className="">
                    {value.toLocaleString()}
                </span>
            </li>
        </>
    );
};
