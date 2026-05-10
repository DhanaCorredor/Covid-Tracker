export const COLUMNS = [
  {
   accessorKey: "flag",
    header: "Flag",                      
    cell: (info) => info.getValue(),   
    enableSorting: false,              
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: (info) => <strong>{info.getValue()}</strong>,
  },
  {
    accessorKey: "cases",
    header: "Cases",
    cell: (info) => info.getValue().formatNumber("es-ES"),
  },
  {
 accessorKey:'newCases', 
    header: 'New Cases',
    cell: info => info.getValue() || 0,
  },
  {
    accessorKey: "deaths",
    header: "Deaths",
    cell: (info) => (
      <span >
        {info.getValue().formatNumber("es-ES")}
      </span>
    ),
  },
  {
    accessorKey: 'newDeaths', 
    header: 'New Deaths',
    cell: info => info.getValue() || 0,
  },
  {
    accessorKey: "recovered",
    header: "Recovered",
    cell: (info) => (
      <span >
        {info.getValue().formatNumber("es-ES")}
      </span>
    ),
  },
  {
    accessorKey: "active",
    header: "Active",
    cell: (info) => info.getValue().formatNumber("es-ES"),
  },
  {
    accessorKey: "critical",
    header: "Critical",
    cell: (info) => info.getValue().formatNumber("es-ES"),
  },
  {
    accessorKey: "tested",
    header: "Tested",
    cell: (info) => info.getValue().formatNumber("es-ES"),
  },
];
