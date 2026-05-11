import React, { useState, useEffect } from 'react'
import './cardTracker3.css'

const CardCountry = ({ flagUrl, countryName, totalCases }) => {
    return (
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag" />
            <h3 className="country-name">{countryName}</h3>
            <p className="country-total-cases">{totalCases}</p>
        </div>
    )
}

export const TopTenCountries = () => {

    let api_url = "https://disease.sh/v3/covid-19/countries"

    // Hook UseState - Mantiene el estado del componente
    const [countries, setCountries] = useState()
    const [loading, setLoading] = useState(true)
    console.log(countries)

    // Hook UseEffect - Monta el componente en base a un estado
    useEffect(() => {
        const api = async (url) => {
            const result = await fetch(url);
            let covid_data = await result.json();
            setCountries(covid_data);
            setLoading(false)
        };
        api(api_url)
    }, [api_url])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="top-10-container">
            <h2 className="top-10-title">Total Cases</h2>
            <h2>Today Cases</h2>
            <h2>Today Deaths</h2>
            <h2>Today deaths</h2>
            <h2>Top active </h2>
            <h2>Top Recovered</h2>
            <div className="top-10-list">
                {countries.map((country) => (
                    <CardCountry key={country.country}
                        flagUrl={country.countryInfo.flag}
                        countryName={country.country}
                        totalCases={country.cases} />
                ))
                }
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



