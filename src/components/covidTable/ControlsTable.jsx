import React from 'react'

export const ControlsTable = ({ table, globalFilter, setGlobalFilter }) => {
    return (
        <div className='flex items-center justify-between w-full'>

            <div className="flex items-center gap-2 text-body-sm text-text-secondary">
                Show
                <select
                    className="border text-center w-15 h-8    border-border-strong"
                >
                    {[10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>{pageSize}</option>
                    ))}
                </select>
                entries
            </div>

            <div className="flex items-center gap-2">
                <label className="text-body-sm text-text-secondary">Search:</label>
                <input
                    value={globalFilter ?? ''}
                    onChange={e => setGlobalFilter(e.target.value)}
                    className="border  border-border-strong w-30 h-10
                     "
                />
            </div>
        </div>

    );
};

