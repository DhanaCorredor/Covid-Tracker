import React from 'react'
import './cardTracker3.css'
import { useCountries } from '../../hooks/useCountries'

const CARD_METRICS = [
    { title: 'Total Cases', metric: 'cases' },
    { title: 'Today Cases', metric: 'todayCases' },
    { title: 'Deaths', metric: 'deaths' },
    { title: 'Today Deaths', metric: 'todayDeaths' },
    { title: 'Active', metric: 'active' },
    { title: 'Recovered', metric: 'recovered' },
]

const CardCountry = ({ flagUrl, countryName, value }) => (
    <div className="card-country-container">
        <img src={flagUrl} alt={countryName} className="country-flag" />
        <div className="country-content">
            <h3 className="country-name">{countryName}</h3>
            <p className="country-total-cases">{value !== undefined ? value.toLocaleString() : '-'}</p>
        </div>
    </div>
)

const sortTopTen = (countries = [], metric) =>
    [...countries]
        .sort((a, b) => (b[metric] ?? 0) - (a[metric] ?? 0))
        .slice(0, 10)

const MetricColumn = ({ title, metric, countries }) => (
    <div className="top-10-column">
        <h2>{title}</h2>
        {countries.map((country) => (
            <CardCountry
                key={`${metric}-${country.country}`}
                flagUrl={country.countryInfo.flag}
                countryName={country.country}
                value={country[metric] ?? 0}
            />
        ))}
    </div>
)

export const TopTenCountries = () => {
    const { data: countries = [], loading } = useCountries()

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="top-10-container">
            <div className="top-10-columns">
                {CARD_METRICS.map(({ title, metric }) => (
                    <MetricColumn
                        key={metric}
                        title={title}
                        metric={metric}
                        countries={sortTopTen(countries, metric)}
                    />
                ))}
            </div>
        </div>
    )
}

export const CardTracker3 = () => (
    <div className="containerDateCovid">
        <h3 className="text-heading-lg font-bold text-gray-800">Top 15 Country wise Covid-19 Updates - Tiles</h3>
        <TopTenCountries />
    </div>
)



