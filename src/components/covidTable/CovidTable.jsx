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



export const CovidTable = () => {

    const { data, loading, error } = useCountries("cases");


    const tableData = useMemo(() => data, []);
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


        <table>
            <thead>
                {table.getHeaderGroups().map((hg) => (
                    <tr className="" key={hg.id}>
                        {hg.headers.map((header) => (
                            <th
                                key={header.id}
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                <div className="flex   gap-5 text-blue-950 p-1.5 text-body-md font-bold mt-5"  >

                                    {flexRender(header.column.columnDef.header, header.getContext())}

                                    {{
                                        asc: <Icon icon="lucide:chevron-up" />,
                                        desc: <Icon icon="lucide:chevron-down" />,
                                    }[header.column.getIsSorted()] ?? (
                                            <Icon icon="lucide:chevrons-up-down" className=" text-gray-500"/>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

        </table>
    );
}

