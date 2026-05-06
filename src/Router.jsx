import { Route, Routes } from "react-router-dom";
import { ApiTest } from "./components/common/ApiTest";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Tracker1 } from "./pages/Tracker1";


export const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Tracker1 />} />
        <Route path="map" element={<Tracker1 />} />
        {/* <Route path="table" element={<TablePage />} />
          <Route path="tiles" element={<TilesPage />} /> */}
      </Route>

      <Route path="/api-test" element={<ApiTest />} />
    </Routes>
  );
};
