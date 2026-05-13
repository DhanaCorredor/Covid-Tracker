import { Route, Routes } from "react-router-dom";
import { Tracker3 } from "./pages/Tracker3";
import { UnderConstruction } from "./components/common/UnderConstruction";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Tracker1 } from "./pages/Tracker1";
import { Tracker2 } from "./pages/Tracker2";
import { Tracker5 } from "./pages/Tracker5";
import { Tracker6 } from "./pages/Tracker6";
import { LandingPage } from "./pages/LandingPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Aqui las reemplazo por las páginas reales :D */}
        <Route index            element={<Tracker1 />} />  {/* → <DashboardPage /> */}
        <Route path="reports"   element={<Tracker2 />} />    {/* → <ReportsPage /> */}
        <Route path="apps"      element={<Tracker3/>} />       {/* → <AppsPage /> */}
        <Route path="projects"  element={<UnderConstruction name="Projects" />} />   {/* → <ProjectsPage /> */}
        <Route path="files"     element={<UnderConstruction name="Files" />} />      {/* → <FilesPage /> */}
        <Route path="analytics" element={<Tracker5 />} />  {/* → <AnalyticsPage /> */}
        <Route path="world"     element={<Tracker6 />} />      {/* → <WorldPage /> */}
        <Route path="messages"  element={<UnderConstruction name="Messages" />} />   {/* → <MessagesPage /> */}
      </Route>
    </Routes>
  );
};
