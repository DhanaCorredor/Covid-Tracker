import { useState } from "react";
import { Select } from '../common/Select'

export const ControlsTable = ({ table, globalFilter, setGlobalFilter }) => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-2'>

            <div className="flex items-center gap-2 gap: 'var(--spacing-sm)', color: 'var(--color-text-secondary)">

                <h4 className="text-gray-600 text-body-sm">Show</h4>


                <Select
                    value={table.getState().pagination.pageSize}
                    onChange={(value) => {
                        table.setPageSize(Number(value));
                    }}
                    options={[10, 25, 50, 100]}
                    className=" 
                    border border-neutral-100 "
                />
                <h4 className="text-gray-600 text-body-sm">entries</h4>
            </div>

            <div className="flex items-center gap-2">
                <label className="text-body-sm text-text-secondary">Search:</label>
                <input
                    type="search"
                    value={globalFilter ?? ""}
                    onChange={e => setGlobalFilter(e.target.value)}
                    className="border border-border-strong w-40 h-10"
                />
            </div>
        </div>
    );
};