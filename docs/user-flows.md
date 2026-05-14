# User Flows

Five user-facing flows that cover the working surface of the app. Each diagram is meant to be explained in ~30 seconds.

> The routes `/dashboard/projects`, `/dashboard/files` and `/dashboard/messages` are placeholders (`UnderConstruction`) and are intentionally omitted from these diagrams.

---

## 1. App navigation overview

The app has a single entry point (`/`) and a dashboard shell (`/dashboard`) that hosts every tracker through nested routes. The Sidebar is the only navigation surface.

```mermaid
flowchart LR
    User((User)) --> Landing["Landing /"]
    Landing -->|CTA / logo| Dashboard["Dashboard layout (/dashboard)"]
    Dashboard --> Sidebar[[Sidebar]]
    Sidebar --> T1["Dashboard — Tracker1 (index)"]
    Sidebar --> T2["Reports — Tracker2 (/reports)"]
    Sidebar --> T3["Apps — Tracker3 (/apps)"]
    Sidebar --> T5["Analytics — Tracker5 (/analytics)"]
    Sidebar --> T6["World — Tracker6 (/world)"]
```

---

## 2. Landing page

The landing page is a one-page scroll composed of 8 sections. There is no fetching — content comes from `src/constants/landingData.js`. The user can keep scrolling or jump into the dashboard.

```mermaid
flowchart TD
    Start([Open /]) --> Header[Header / Hero]
    Header --> Symptoms[Symptoms]
    Symptoms --> Prevention[Prevention]
    Prevention --> Faqs[FAQs]
    Faqs --> Lavar[Hand-washing steps]
    Lavar --> Download[Download app]
    Download --> News[News]
    News --> Footer[Footer]
    Footer -->|Navigate| Dashboard([Go to /dashboard])
```

---

## 3. Dashboard — Tracker1

Default route of the dashboard. The user picks a country (defaults to Colombia), sees its 4 metric cards, can click any country on the world map to open a detail modal, and reads global totals at the bottom.

```mermaid
flowchart TD
    Enter([Open /dashboard]) --> Init[Render with default country = Colombia]
    Init --> FetchA[useCountry country]
    Init --> FetchB[useCountries]
    Init --> FetchC[useGlobalTotals]

    FetchA --> Cards[4 metric cards: confirmed / deaths / recovered / active]
    FetchB --> Map[World map]
    FetchC --> Totals[Global totals grid]

    Select[Change country in dropdown] --> FetchA
    Map -->|Click country| Modal[Country detail modal]
    Modal -->|Close| Map
```

---

## 4. Reports — Tracker2

A paginated, searchable table of every country's COVID data. The user interacts only with the table widget.

```mermaid
flowchart LR
    Enter([Open /dashboard/reports]) --> Table[CovidTable]
    Table --> Search[Search]
    Table --> Sort[Sort by column]
    Table --> Paginate[Paginate]
    Search --> Table
    Sort --> Table
    Paginate --> Table
```

---

## 5. Analytics — Tracker5

The user filters by metric (confirmed / deaths / recovered / active). One historical line chart is rendered per country in the fixed `COUNTRIES` list, all reacting to the same filter.

```mermaid
flowchart TD
    Enter([Open /dashboard/analytics]) --> Filter[Metric filter dropdown]
    Filter --> Charts[Grid of CountryChart components]
    Charts -->|each| Hook[useHistoricalData country, metric]
    Hook --> Render[Render historical line chart]
    Filter -->|Change metric| Charts
```

---

## 6. World — Tracker6

Split screen: a color-coded world map on the left (red intensity by case count) and a country detail panel on the right (USA by default). Clicking a country on the map updates the right panel.

```mermaid
flowchart LR
    Enter([Open /dashboard/world]) --> Layout[Split layout]
    Layout --> Map[Color-coded world map]
    Layout --> Panel[Country detail panel — default USA]

    Map -->|useCountries| FillData[(All countries data)]
    Panel -->|useCountry selected| CountryData[(Selected country data)]

    User((User)) -->|Click country on map| Update[setSelectedCountry]
    Update --> Panel
```
