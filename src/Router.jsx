import { Route, Routes } from "react-router-dom";
import { Tracker3 } from "./pages/Tracker3";
import { UnderConstruction } from "./components/common/UnderConstruction";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Tracker1 } from "./pages/Tracker1";
import { Tracker2 } from "./pages/Tracker2";
import { Tracker5 } from "./pages/Tracker5";
import { Tracker6 } from "./pages/Tracker6";
import { LandingPage } from "./pages/LandingPage";
import { Tracker4 } from "./pages/Tracker4";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index            element={<Tracker1 />} />
        <Route path="reports"   element={<Tracker2 />} />
        <Route path="apps"      element={<Tracker3/>} />
        <Route path="projects"  element={<Tracker4 />} />
        <Route path="files"     element={<UnderConstruction name="Files" />} />
        <Route path="analytics" element={<Tracker5 />} />
        <Route path="world"     element={<Tracker6 />} />
        <Route path="messages"  element={<UnderConstruction name="Messages" />} />
      </Route>
    </Routes>
  );
};
