import { useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    flexRender,
} from "@tanstack/react-table";
import { COLUMNS } from "../../constants/covidTable";
import { useCountries } from "../../hooks/useCountries";
import { Icon } from "@iconify/react";
import { ControlsTable } from "./ControlsTable";



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
<ControlsTable table={table}></ControlsTable>
            <table>
                
                <thead>
                    {table.getHeaderGroups().map((hg) => (
                        <tr className="" key={hg.id}>
                            {hg.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    <div className="flex gap-5 text-blue-950 p-1.5 text-body-md font-bold mt-5"  >

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
                                            px-4 py-3 text-body-lg font-light text-gray-500 
                                            ${index === 2 ? "bg-neutral-300 " : ""} 
                                            ${index > 1 ? "text-right" : "text-left"}
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
