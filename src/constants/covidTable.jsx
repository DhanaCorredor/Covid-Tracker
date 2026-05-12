import { formatNumber } from "../utils/format"

export const COLUMNS = [
  {
    header: "Flag",
    accessorKey: "countryInfo.flag",
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="Flag"
        className="w-8 h-5"
      />
    ),
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: (info) => <strong>{info.getValue()}</strong>,
  },
  {
    accessorKey: "cases",
    header: "Cases",
    cell: (info) => formatNumber(info.getValue()),
  },
  {
    accessorKey: "newCases",
    header: "New Cases",
    cell: (info) => formatNumber(info.getValue() || 0),
  },
  {
    accessorKey: "deaths",
    header: "Deaths",
    cell: (info) => (
      <span>
        {formatNumber(info.getValue())}
      </span>
    ),
  },
  {
    accessorKey: "newDeaths",
    header: "New Deaths",
    cell: (info) => formatNumber(info.getValue() || 0),
  },
  {
    accessorKey: "recovered",
    header: "Recovered",
    cell: (info) => (
      <span>
        {formatNumber(info.getValue())}
      </span>
    ),
  },
  {
    accessorKey: "active",
    header: "Active",
    cell: (info) => formatNumber(info.getValue()),
  },
  {
    accessorKey: "critical",
    header: "Critical",
    cell: (info) => formatNumber(info.getValue()),
  },
  {
    header: "Tests",
    accessorKey: "tests",
    cell: (info) => formatNumber(info.getValue()) ?? '0',
  },
];
