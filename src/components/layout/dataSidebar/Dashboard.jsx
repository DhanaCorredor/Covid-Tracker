import React from "react";
import { StatCard } from "./StatCard";



export const Dashboard = () => {
  return (
    <div className="p-1  min-h-screen">
      <h1 className="text-2xl font-extrabold mb-6">COVID-19 Tracker</h1>

      <StatCard
        title="Total Case"
        value={374111576}
        change={1129144}
        color="red"
      />

      <StatCard
        title="Active Case"
        value={368451537}
        color="orange"
      />

      <StatCard
        title="Recovered Case"
        value={0}
        change={0}
        color="green"
      />

      <StatCard
        title="Deaths Case"
        value={5660039}
        change={3631}
        color="blue"
      />
    </div>
  )
}

