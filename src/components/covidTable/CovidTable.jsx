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



export default function CovidTable() {
  // 1. useCountries ya gestiona loading, error y data por ti
  //    initialData: [] significa que data empieza como array vacío — nunca undefined
  const { data, loading, error } = useCountries("cases");

  // 2. useMemo depende de `data` — se actualiza cuando llegan los datos de la API
  const tableData   = useMemo(() => data,    []);
  const tableColumns = useMemo(() => COLUMNS, []);

  const table = useReactTable({
    data:    tableData,
    columns: tableColumns,
    getCoreRowModel:     getCoreRowModel(),
    getSortedRowModel:   getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  // 3. Gestiona los tres estados antes de renderizar la tabla
  if (loading) return <p>Cargando...</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <table>
      <thead>
      {table.getHeaderGroups().map((hg) => (
        <tr key={hg.id}>
          {hg.headers.map((header) => (
            <th 
              key={header.id} 
              onClick={header.column.getToggleSortingHandler()}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>

                {flexRender(header.column.columnDef.header, header.getContext())}

                {{
                  asc: <Icon icon="lucide:chevron-up" />,
                  desc: <Icon icon="lucide:chevron-down" />,
                }[header.column.getIsSorted()] ?? (
                  <Icon icon="lucide:chevrons-up-down" />
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