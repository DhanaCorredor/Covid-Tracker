import { useState } from "react";
import { MetricCard } from "../components/common/MetricCard";
import { MetricCardAll } from "../components/common/MetricCardAll";
import { useCountry } from "../hooks/useCountry";
import { useGlobalTotals } from "../hooks/useGlobalTotals";
import {
  DASHBOARD_METRICS,
  GLOBAL_METRICS,
} from "../constants/dashboardMetrics";

export const Tracker1 = () => {
  const [country] = useState("Colombia");
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

  if (errorCountry) {
    return <p className="text-status-cases">{errorCountry}</p>;
  }

  return (
    <div>
      <div className="border-b border-neutral-200 pb-lg">
        <h1 className="text-heading-md">Tracker 1 filtro y fecha</h1>
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
