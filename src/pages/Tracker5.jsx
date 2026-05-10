import { CountryChart } from '../components/common/CountryChart'
import { COUNTRIES } from '../constants/historicalChart'

export function Tracker5() {
  return (
    <section className="w-full p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {COUNTRIES.map((country) => (
          <CountryChart key={country} country={country} />
        ))}
      </div>
    </section>
  )
}
