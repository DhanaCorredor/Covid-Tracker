import React from "react";
import StatCard from "./statCard.jsx";

const Dashboard = () => {

  const covidData = [
    { id: "total", title: "Total Case", change: 1129144, value: 374111576, color: "#FEE2E2" },
    { id: "active", title: "Active Case", value: 368451537, color: "#FFEDD5" },
    { id: "recovered", title: "Recovered Case", change: 0, value: 0, color: "#DCFCE7", isActive: true },
    { id: "deaths", title: "Deaths Case", change: 3631, value: 5660039, color: "#3B82F6" },
  ];

  return (
    <main className="max-w-2xl mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-xl font-bold text-gray-900">COVID-19 Tracker</h1>
      </header>

      <section >
        <ul className="space-y-4">
          {covidData.map((stat) => (
            <li key={stat.id}>
              <StatCard {...stat} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Dashboard;