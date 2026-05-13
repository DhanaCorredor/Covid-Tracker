import { useState } from "react";
import { WorldMap } from "../components/common/WorldMap";
import { MetricCard } from "../components/common/MetricCard";
import { ErrorState } from "../components/common/ErrorState";
import { useCountries } from "../hooks/useCountries";
import { useCountry } from "../hooks/useCountry";
import { TRACKER6_METRICS } from "../constants/dashboardMetrics";

const RED_SHADES = [
  "var(--color-map-red-1)",
  "var(--color-map-red-2)",
  "var(--color-map-red-3)",
  "var(--color-map-red-4)",
  "var(--color-map-red-5)",
];
function casesToRed(cases) {
  if (!cases || cases < 1) return RED_SHADES[0];
  const t = Math.min(Math.log10(cases) / 8, 1);
  const idx = Math.min(
    Math.floor(t * RED_SHADES.length),
    RED_SHADES.length - 1,
  );
  return RED_SHADES[idx];
}

const CountryTooltipRich = ({ datum }) => (
  <div className="flex flex-col gap-xs min-w-40">
    <div className="flex items-center gap-sm">
      <img
        src={datum.countryInfo?.flag}
        alt=""
        className="w-5 h-auto rounded-sm"
      />
      <span className="text-label-md">{datum.country}</span>
    </div>
    <span>Cases: {datum.cases}</span>
    <span>Death: {datum.deaths}</span>
    <span>Active: {datum.active}</span>
    <span>Recovered: {datum.recovered}</span>
  </div>
);

export const Tracker6 = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const {
    data: countries,
    error: errorCountries,
    refetch: refetchCountries,
  } = useCountries();
  const {
    data: countryData,
    loading,
    error: errorCountry,
    refetch: refetchCountry,
  } = useCountry(selectedCountry);

  return (
    <div className="flex flex-col md:flex-row gap-lg">
      <div className="flex-1 bg-neutral-0 rounded-sm shadow-sm basis-3/5">
        <h3 className="text-heading-lg p-md mb-md border-b border-neutral-200 ">
          World
        </h3>

        {errorCountries ? (
          <div className="p-lg">
            <ErrorState
              message={errorCountries}
              onRetry={refetchCountries}
            />
          </div>
        ) : (
          <WorldMap
            data={countries ?? []}
            getFill={(_, datum) => casesToRed(datum?.cases)}
            tooltipContent={(c) => <CountryTooltipRich datum={c} />}
            onCountryClick={(c) => setSelectedCountry(c.country)}
            zoomButtonClassName="bg-status-death hover:bg-hover-map1 text-neutral-0"
          />
        )}
      </div>

      <div className="flex flex-col gap-md basis-2/5">
        <div className="flex items-center gap-sm">
          <img
            src={countryData?.countryInfo?.flag}
            alt=""
            className="w-8 h-auto rounded-xs"
          />
          <h2 className="text-heading-lg text-text-primary">
            {selectedCountry}
          </h2>
        </div>

        {errorCountry ? (
          <ErrorState message={errorCountry} onRetry={refetchCountry} />
        ) : (
          <div className="grid grid-cols-2 gap-md">
            {TRACKER6_METRICS.map(({ key, title, variant }) => (
              <MetricCard
                key={key}
                title={title}
                value={loading ? "" : countryData?.[key]}
                variant={variant}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
