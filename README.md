# Covid-Tracker

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)
[![React 19](https://img.shields.io/badge/react-19-61dafb.svg)](https://react.dev)
[![Vite 8](https://img.shields.io/badge/vite-8-646cff.svg)](https://vitejs.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/tailwindcss-v4-38bdf8.svg)](https://tailwindcss.com)
[![React Router 7](https://img.shields.io/badge/react--router-7-ca4245.svg)](https://reactrouter.com)
[![pnpm](https://img.shields.io/badge/pnpm-package%20manager-f69220.svg)](https://pnpm.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Real-time Covid-19 dashboard built with React 19, Vite and Tailwind v4, powered by the public disease.sh API.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API](#api)
- [Testing](#testing)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

Covid-Tracker is a web application split in two parts: a public **informative landing** that introduces the pandemic context (symptoms, prevention, handwashing steps, FAQs and news), and a **dashboard** that visualizes global and per-country Covid-19 figures — total cases, active, recovered, deaths and historical trends — through metric cards, a sortable data table, analytics charts and an interactive world map.

The project was developed as a team exercise during the front-end module of the [Factoría F5](https://factoriaf5.org) bootcamp, using a real-world public data source and a modern React stack.

All data is fetched from [disease.sh](https://disease.sh), a free public API that aggregates Covid-19 statistics from multiple official sources.

## Install

The project uses **pnpm** as its package manager. The lockfile is `pnpm-lock.yaml`; do not mix it with npm or yarn.

```bash
git clone https://github.com/DhanaCorredor/Covid-Tracker.git
cd Covid-Tracker
pnpm install
```

### Environment variables

Create a `.env` file in the project root with the base URL of the Covid-19 API:

```env
VITE_DISEASE_API_URL=https://disease.sh/v3/covid-19
```

This is the single environment variable read by the axios client at [src/api/http.client.js](src/api/http.client.js). Without it, every request will fail at runtime.

## Usage

The project exposes four scripts, all defined in [package.json](package.json):

```bash
pnpm dev       # start the Vite dev server with HMR
pnpm build     # produce the optimized production build
pnpm preview   # serve the production build locally
pnpm lint      # run ESLint (flat config in eslint.config.js)
pnpm test      # run the Vitest test suite
```

Once `pnpm dev` is running, the app is reachable at the URL printed by Vite (default `http://localhost:5173`) with two entry points:

- `/` — the public landing page.
- `/dashboard` — the main application shell with all tracker views.

## Features

- **Landing page** with sections for symptoms, prevention, handwashing steps, FAQs, news and a download mockup.
- **Global overview** with worldwide totals, a country selector and metric cards ([src/pages/Tracker1.jsx](src/pages/Tracker1.jsx)).
- **Reports table** with pagination, sorting and search across all countries, powered by `@tanstack/react-table` ([src/pages/Tracker2.jsx](src/pages/Tracker2.jsx)).
- **Apps section** with curated feature cards ([src/pages/Tracker3.jsx](src/pages/Tracker3.jsx)).
- **Analytics charts** plotting historical cases, deaths, recoveries and active counts per country with Recharts ([src/pages/Tracker5.jsx](src/pages/Tracker5.jsx)).
- **Interactive world map** colored by case severity, with per-country detail panels rendered via `react-simple-maps` and `d3-geo` ([src/pages/Tracker6.jsx](src/pages/Tracker6.jsx)).
- **Centralized data fetching** through a custom `useApi` hook with built-in `AbortController` cancellation and localized error messages.

## Tech Stack

- **Framework:** [React 19](https://react.dev) with [Vite 8](https://vitejs.dev) and `@vitejs/plugin-react`.
- **Routing:** [React Router 7](https://reactrouter.com) with nested routes.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`, backed by design tokens in [src/styles/variables.css](src/styles/variables.css).
- **HTTP:** [Axios](https://axios-http.com) with a shared client and request cancellation.
- **Charts:** [Recharts](https://recharts.org).
- **Maps:** [react-simple-maps](https://www.react-simple-maps.io) + [d3-geo](https://d3js.org/d3-geo).
- **Tables:** [@tanstack/react-table](https://tanstack.com/table).
- **Icons:** [@iconify/react](https://iconify.design).
- **Testing:** [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) + [jsdom](https://github.com/jsdom/jsdom).
- **Language:** JavaScript (JSX) only — no TypeScript by design.
- **Package manager:** [pnpm](https://pnpm.io).

## Project Structure

```
src/
├── api/          # axios client (http.client.js): base URL, timeout, interceptors
├── components/
│   ├── common/   # reusable UI (MetricCard, Modal, WorldMap, ErrorBoundary, ...)
│   ├── layout/   # layout shells (Sidebar)
│   ├── landing/  # landing page sections (Header, Symptoms, Prevention, FAQs, ...)
│   └── ...       # feature-scoped components (covidTable, cardTracker3, cardTracker4)
├── constants/    # static data (endpoints, sidebar items, dashboard metrics, ...)
├── hooks/        # useApi base hook + domain hooks (useCountries, useCountry, ...)
├── pages/        # route-level components (LandingPage, DashboardLayout, Tracker1..6)
├── services/     # API service layer (disease.service.js)
├── styles/       # variables.css — Tailwind v4 @theme tokens
├── tests/        # Vitest test files + setup.js
└── utils/        # pure helpers (errors, format)
```

## API

Covid-Tracker is a pure client of the disease.sh public API. The data flow is strictly layered:

> **endpoint constant → service → hook → component**

- **Axios client** ([src/api/http.client.js](src/api/http.client.js)) — reads `VITE_DISEASE_API_URL`, sets a 10-second timeout, and exposes a shared `httpClient` instance that supports `AbortSignal`.
- **Endpoints** ([src/constants/endpoints.js](src/constants/endpoints.js)) — URL builders for:
  - `/all` — global totals.
  - `/countries` — list of all countries (sortable).
  - `/countries/{name}` — single country detail.
  - `/historical/{name}` — historical series (default last 30 days).
- **Service functions** ([src/services/disease.service.js](src/services/disease.service.js)) — `getGlobalTotals`, `getCountries`, `getCountry`, `getHistoricalData`. Every function accepts and forwards `{ signal }` to axios.
- **Hooks** ([src/hooks/](src/hooks)) — `useApi` is the base hook; `useGlobalTotals`, `useCountries`, `useCountry` and `useHistoricalData` each wrap it for one resource and expose `data`, `loading` and `error`.

Components must never import `axios` or call `httpClient` directly — they consume the domain hooks.

## Testing

The test suite runs with Vitest in a jsdom environment. Existing tests live in [src/tests/](src/tests/) and cover the dashboard layout, the analytics view and the error utilities.

```bash
pnpm test
```

When adding new tests, follow the convention documented in [CLAUDE.md §12](CLAUDE.md): colocate `*.test.jsx` files next to the source, prefer `screen.getByRole` queries, and mock at the axios layer rather than at the hook return value.

## Maintainers

- [@DhanaCorredor](https://github.com/DhanaCorredor)
- Adriana Suárez
- Lexy Arraez
- Luisa Fernanda
- Maria Carrillo

## License

[MIT](LICENSE) © Covid-Tracker contributors
