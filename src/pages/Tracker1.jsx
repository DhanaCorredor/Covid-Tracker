import { useState } from "react";
import { MetricCard } from "../components/common/MetricCard";
import { MetricCardAll } from "../components/common/MetricCardAll";
import { Select } from "../components/common/Select";
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
      <div className="flex justify-between items-center border-b border-neutral-200 pb-lg">
        <Select
          value={country}
          onChange={setCountry}
          options={countryOptions}
          ariaLabel="Country"
        />
        <p className="text-body-md text-text-secondary">
          Updated: {formatDate(countryData?.updated)}
        </p>
      </div>

      <div className="flex gap-xl mt-lg">
        <div className="grid grid-cols-2 gap-lg">
          {DASHBOARD_METRICS.map(({ key, title, variant }) => (
            <MetricCard
              key={key}
              title={title}
              value={loadingCountry ? "" : countryData?.[key]}
              variant={variant}
            />
          ))}
        </div>
        <div>MAPA</div>
      </div>

      {errorGlobal ? (
        <p className="text-status-cases">{errorGlobal}</p>
      ) : (
        <div className="grid grid-cols-5 gap-0.5 mt-xl">
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
