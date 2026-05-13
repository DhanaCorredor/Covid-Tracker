import { CardSidebar } from "./CardSidebar";
import { CountryRow } from "./CountryRow";
import { stats } from "../../../constants/SidebarData";
import { useGlobalTotals } from "../../../hooks/useGlobalTotals";
import { useCountries } from "../../../hooks/useCountries";

export const SidebarData = () => {
  const { data: globalData } = useGlobalTotals();
  const { data: countriesData, loading: loadingCountries } = useCountries('cases');

  const top10 = countriesData?.slice(0, 10) || [];

  return (
    <div className="p-5 shadow-sm bg-neutral-0 max-w-80 h-svh overflow-y-auto">
      <h1 className="text-heading-xl mb-5">COVID-19 Tracker</h1>

      <div className="flex flex-col">
        {stats(globalData).map((stat) => (
          <CardSidebar
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-heading-md text-blue-950 mb-4">
          Top 10 Country
        </h2>

        <ul className="flex flex-col w-full">
          {loadingCountries ? (
            <li className="p-4 text-center text-gray-500 italic">Loading countries...</li>
          ) : (
            top10.map((country) => (
              <li key={country.country}>
                <CountryRow
                  flag={country.countryInfo.flag}
                  name={country.country}
                  value={country.cases}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};