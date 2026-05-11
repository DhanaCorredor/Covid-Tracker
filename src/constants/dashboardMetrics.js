export const DASHBOARD_METRICS = [
  { key: 'cases', title: 'Total Cases', variant: 'cases' },
  { key: 'deaths', title: 'Total Deaths', variant: 'deaths' },
  { key: 'recovered', title: 'Total Recovered', variant: 'recovered' },
  { key: 'active', title: 'Total Active', variant: 'active' },
  { key: 'todayCases', title: 'New Cases', variant: 'critical' },
  { key: 'todayDeaths', title: 'New Deaths', variant: 'deaths' },
]

export const GLOBAL_METRICS = [
  { key: 'cases', title: 'Total Confirmed', variant: 'cases' },
  { key: 'recovered', title: 'Total Recovered', variant: 'recovered' },
  { key: 'deaths', title: 'Total Deaths', variant: 'deaths' },
  { key: 'todayDeaths', title: 'New Deaths', variant: 'deaths' },
  { key: 'helpline', title: 'Help Line No.', variant: 'helpline', staticValue: 198 },
]

export const TRACKER6_METRICS = [
  { key: 'cases',              title: 'Total Cases',       variant: 'cases' },
  { key: 'todayCases',         title: 'Today Cases',       variant: 'critical' },
  { key: 'deaths',             title: 'Total Deaths',      variant: 'deaths' },
  { key: 'todayDeaths',        title: 'Today Deaths',      variant: 'deaths' },
  { key: 'recovered',          title: 'Recovered',         variant: 'recovered' },
  { key: 'active',             title: 'Active',            variant: 'active' },
  { key: 'critical',           title: 'Critical',          variant: 'critical' },
  { key: 'casesPerOneMillion', title: 'Cases Per Million', variant: 'cases' },
]

export const METRIC_VARIANTS = {
  cases: {
    colorClass: 'text-status-death-cases',
    iconSrc: '/images/covid-defult.svg',
  },
  deaths: {
    colorClass: 'text-status-cases',
    iconSrc: '/images/covid-red.svg',
  },
  recovered: {
    colorClass: 'text-status-recovered',
    iconSrc: '/images/covid-green.svg',
  },
  active: {
    colorClass: 'text-total-active',
    iconSrc: '/images/covid-blue.svg',
  },
  critical: {
    colorClass: 'text-status-active',
    iconSrc: '/images/covid-orange.svg',
  },
  helpline: {
    colorClass: 'text-status-critical',
    iconSrc: '/images/telephone.svg',
  },
  default: {
    colorClass: 'text-status-death',
    iconSrc: '/images/covid-redark.svg',
  },
}
