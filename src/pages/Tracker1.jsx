import { useState } from "react";
import { MetricCard } from "../components/common/MetricCard";
import { MetricCardAll } from "../components/common/MetricCardAll";
import { Select } from "../components/common/Select";
import { WorldMap } from "../components/common/WorldMap";
import { CountryDetailModal } from "../components/common/CountryDetailModal";
import { useCountry } from "../hooks/useCountry";
import { useCountries } from "../hooks/useCountries";
import { useGlobalTotals } from "../hooks/useGlobalTotals";
import {
  DASHBOARD_METRICS,
  GLOBAL_METRICS,
} from "../constants/dashboardMetrics";
import { formatDate } from "../utils/format";

export const Tracker1 = () => {
  const [country, setCountry] = useState("Colombia");
  const [mapSelectedCountry, setMapSelectedCountry] = useState(null);
  const {
    data: countryData,
    loading: loadingCountry,
    error: errorCountry,
  } = useCountry(country);
  const {
    data: globalData,
    loading: loadingGlobal,
    error: errorGlobal,
  } = useGlobalTotals();
  const { data: countries } = useCountries();

  const countryOptions = (countries ?? [])
    .map((c) => ({ value: c.country, label: c.country }))
    .sort((a, b) => a.label.localeCompare(b.label));

  if (errorCountry) {
    return <p className="text-status-cases">{errorCountry}</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-md md:flex-row justify-between items-center border-b border-neutral-200 pb-md">
        <Select
          value={country}
          onChange={setCountry}
          options={countryOptions}
          ariaLabel="Country"
          className="md:max-w-60"
        />
        <p className="text-label-md">
          Updated: {formatDate(countryData?.updated)}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-xl mt-lg">
        <div className="grid grid-cols-2 gap-lg md:flex-1 xl:basis-2/5 h-fit">
          {DASHBOARD_METRICS.map(({ key, title, variant }) => (
            <MetricCard
              key={key}
              title={title}
              value={loadingCountry ? "" : countryData?.[key]}
              variant={variant}
            />
          ))}
        </div>
        <div className="flex-1 min-h-60 md:min-h-95 xl:basis-3/5">
          <WorldMap
            data={countries ?? []}
            onCountryClick={(c) => setMapSelectedCountry(c.country)}
            tooltipContent={(c) => <span>{c.country}</span>}
            enableZoom
          />
        </div>
      </div>

      <CountryDetailModal
        country={mapSelectedCountry}
        isOpen={!!mapSelectedCountry}
        onClose={() => setMapSelectedCountry(null)}
      />

      {errorGlobal ? (
        <p className="text-status-cases">{errorGlobal}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5 mt-xl">
          {GLOBAL_METRICS.map(({ key, title, variant, staticValue }) => (
            <MetricCardAll
              key={key}
              title={title}
              value={staticValue ?? (loadingGlobal ? "" : globalData?.[key])}
              variant={variant}
            />
          ))}
        </div>
      )}
    </div>
  );
};
