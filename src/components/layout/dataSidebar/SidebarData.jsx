import { StatCard } from "./StatCard";
import { CountryRow } from "./CountryRow"
import { stats } from "../../../constants/SidebarData";
import { useGlobalTotals } from "../../../hooks/useGlobalTotals";
import { useCountries } from "../../../hooks/useCountries";

export const SidebarData = () => {

  const { data: globalData } = useGlobalTotals();
  const { data: countriesData, loading: loadingCountries } = useCountries('cases');

  const top10 = countriesData?.slice(0, 10) || [];

  return (

<<<<<<< HEAD
    <div className="p-5 shadow-sm bg-neutral-0 max-w-80">

      <h1 className="text-heading-lg font-black tracking-wide p-2">COVID-19 Tracker</h1>
=======
    <div className="p-5 shadow-sm bg-neutral-0 max-w-87.5">
      <h1 className="text-heading-xl p-5">COVID-19 Tracker</h1>
>>>>>>> eeb1a14e6551ea3fd1eb912abb967516480a113b

      <div className="grid grid-cols-1">
        {stats(globalData).map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>

      <div>
        <h2 className=" text-heading-md text-blue-950 mb-6">
          Top 10 Country
        </h2>

        <div className="w-full">
          <ul className="flex flex-col w-full ">
            {loadingCountries ? (
              <li className="p-4 text-center text-gray-500 italic">Cargando países...</li>
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
    </div>

  )
}
