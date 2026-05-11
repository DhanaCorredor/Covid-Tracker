import { useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    flexRender,
} from "@tanstack/react-table";
import { COLUMNS } from "../../constants/covidTable";
import { Icon } from "@iconify/react";
import { ControlsTable } from "./ControlsTable";
import { useCountries } from "../../hooks/useCountries";



export const CovidTable = () => {

    const { data: apiData, loading, error } = useCountries("cases");


    const tableData = useMemo(() => apiData || [], [apiData]);
    const tableColumns = useMemo(() => COLUMNS, []);

    const table = useReactTable({
        data: tableData,
        columns: tableColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });


    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div>
            <ControlsTable
                table={table} />
            <table className="w-full border-collapse">

                <thead>
                    {table.getHeaderGroups().map((hg) => (
                        <tr className="" key={hg.id}>
                            {hg.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    className={header.column.columnDef.meta?.className}
                                >
                                    <div className=" flex items-center  gap-2 px-3 py-3 text-blue-950 text-body-md font-bold "  >

                                        {flexRender(header.column.columnDef.header, header.getContext())}

                                        {{
                                            asc: <Icon icon="lucide:chevron-up" />,
                                            desc: <Icon icon="lucide:chevron-down" />,
                                        }[header.column.getIsSorted()] ?? (
                                                <Icon icon="lucide:chevrons-up-down" className=" text-gray-500" />
                                            )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="">
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}

                            className="border-b border-gray-200 last:border-0 odd:bg-neutral-100 even:bg-neutral-0 hover:bg-neutral-300 transition-colors"
                        >
                            {row.getVisibleCells().map((cell, index) => (
                                <td
                                    key={cell.id}
                                    className={`
                                          px-3  py-3 text-body-md font-light text-gray-500
                                            ${index === 2 ? "bg-neutral-300 " : ""}
                                            
                                        `}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
}
