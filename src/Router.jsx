import { Route, Routes } from "react-router-dom";
import { ApiTest } from "./components/common/ApiTest";
import DashboardLayout from "./pages/DashboardLayout";

export const Router = () => {
  return (
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* <Route index element={<MapPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="tiles" element={<TilesPage />} /> */}
        </Route>

        <Route path="/api-test" element={<ApiTest />} />
      </Routes>
  );
};
