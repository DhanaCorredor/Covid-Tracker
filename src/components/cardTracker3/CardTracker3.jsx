    import React, { useState, useEffect } from 'react'
    import './cardTracker3.css'
    import { useCountries } from '../../hooks/useCountries';

    const CardCountry = ({ flagUrl, countryName, totalCases }) => {
        return (
            <div className="card-country-container">
                <img src={flagUrl} alt={countryName} className="country-flag" />
                <div className="country-content">
                    <h3 className="country-name">{countryName}</h3>
                    <p className="country-total-cases">{totalCases}</p>
                </div>
            </div>
        )
    }

    export const TopTenCountries = () => {
        const { data: countries, loading: loadingCountries } = useCountries();


        if (loadingCountries) {
            return <h2>Loading...</h2>
        }

        const sortTopTen = (data, metric) =>
            [...(data ?? [])]
                .sort((a, b) => (b[metric] ?? 0) - (a[metric] ?? 0))
                .slice(0, 15);

        const topCases = sortTopTen(countries, 'cases')
        const topTodayCases = sortTopTen(countries, 'todayCases')
        const topDeaths = sortTopTen(countries, 'deaths')
        const topTodayDeaths = sortTopTen(countries, 'todayDeaths')
        const topActive = sortTopTen(countries, 'active')
        const topRecovered = sortTopTen(countries, 'recovered')

        return (
            <div className="top-10-container">

                <div className="top-10-columns">
                    <div className="top-10-column">
                        <h2>Total Cases</h2>
                        {topCases.map((country) => (
                            <CardCountry key={`cases-${country.country}`}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalCases={country.cases} />
                        ))}
                    </div>
                    <div className="top-10-column">
                        <h2>Today Cases</h2>
                        {topTodayCases.map((country) => (
                            <CardCountry key={`today-cases-${country.country}`}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalCases={country.todayCases} />
                        ))}
                    </div>
                    <div className="top-10-column">
                        <h2>Deaths</h2>
                        {topDeaths.map((country) => (
                            <CardCountry key={`deaths-${country.country}`}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalCases={country.deaths} />
                        ))}
                    </div>
                    <div className="top-10-column">
                        <h2>Today Deaths</h2>
                        {topTodayDeaths.map((country) => (
                            <CardCountry key={`today-deaths-${country.country}`}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalCases={country.todayDeaths} />
                        ))}
                    </div>
                    <div className="top-10-column">
                        <h2>Active</h2>
                        {topActive.map((country) => (
                            <CardCountry key={`active-${country.country}`}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalCases={country.active} />
                        ))}
                    </div>
                    <div className="top-10-column">
                        <h2>Recovered</h2>
                        {topRecovered.map((country) => (
                            <CardCountry key={`recovered-${country.country}`}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalCases={country.recovered} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    export const CardTracker3 = () => {
        return (
            <div className="countainerDateCovid">
                <h3 className="text-heading-lg font-bold text-gray-800">Top 10 Country wise Covid-19 Updates - Tiles</h3>
                <TopTenCountries />
            </div>
        )
    }



