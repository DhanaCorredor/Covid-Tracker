 export const stats = (globalData) => [
    {
      title: "Total Cases",
      value: globalData?.cases,
      change: globalData?.todayCases,
      color: "red",
    },
    {
      title: "Active Cases",
      value: globalData?.active,
      color: "orange",
    },
    {
      title: "Recovered Cases",
      value: globalData?.recovered,
      change: globalData?.todayRecovered,
      color: "green",
    },
    {
      title: "Deaths",
      value: globalData?.deaths,
      change: globalData?.todayDeaths,
      color: "blue",
    },
  ];


 export const styles = {
  red: `
    bg-[var(--color-status-cases-bg)]
    text-[var(--color-status-cases)]
    hover:border-[var(--color-status-cases)]
    hover:shadow-lg
  `,

  orange: `
    bg-[var(--color-status-active-bg)]
    text-[var(--color-status-active)]
    hover:border-[var(--color-status-active)]
    hover:shadow-lg
  `,

  green: `
    bg-[var(--color-status-recovered-bg)]
    text-[var(--color-status-recovered)]
    hover:border-[var(--color-status-recovered)]
    hover:shadow-lg
  `,

  blue: `
    bg-[var(--color-status-death-cases-bg)]
    text-[var(--color-status-death-cases)]
    hover:border-[var(--color-status-death-cases)]
    hover:shadow-lg
  `,
};