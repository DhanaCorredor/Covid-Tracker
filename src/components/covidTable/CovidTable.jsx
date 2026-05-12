import { useMemo, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from "@tanstack/react-table";
import { COLUMNS } from "../../constants/covidTable";
import { Icon } from "@iconify/react";
import { ControlsTable } from "./ControlsTable";
import { useCountries } from "../../hooks/useCountries";
import { Pagination } from "./Pagination";



export const CovidTable = () => {
    const { data: apiData, loading, error } = useCountries("cases");
    const [globalFilter, setGlobalFilter] = useState("");

    const tableData = useMemo(() => apiData || [], [apiData]);
    const tableColumns = useMemo(() => COLUMNS, []);

    const table = useReactTable({
        data: tableData,
        columns: tableColumns,
        state: { globalFilter },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: { pagination: { pageSize: 10 } },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col gap-3 m-1 h-[calc(95vh-90px)]">
            <ControlsTable
                table={table}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            
            <div className="flex-1 min-h-0 overflow-x-auto overflow-y-auto border-b border-neutral-200">
                <table className="w-full border-collapse min-w-max">
                    <thead>
                        {table.getHeaderGroups().map((hg) => (
                            <tr key={hg.id}>
                                {hg.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className={`sticky top-0 z-10 bg-neutral-0 border-b border-neutral-300 ${header.column.columnDef.meta?.className}`}
                                    >
                                        <div className="flex items-center gap-1 px-3 py-3 text-blue-950 font-bold text-body-md">
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {{
                                                asc: <Icon icon="lucide:chevron-up" />,
                                                desc: <Icon icon="lucide:chevron-down" />,
                                            }[header.column.getIsSorted()] ?? (
                                                <Icon icon="lucide:chevrons-up-down" className="text-gray-500" />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className="border-b border-gray-200 odd:bg-neutral-100 even:bg-neutral-0 hover:bg-neutral-300 transition-colors"
                            >
                                {row.getVisibleCells().map((cell, index) => (
                                    <td
                                        key={cell.id}
                                        className={`px-3 py-3 text-body-md font-light text-gray-500 whitespace-nowrap ${
                                            index === 2 ? "bg-neutral-300" : ""
                                        }`}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination table={table} />
        </div>
    );
};