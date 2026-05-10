import { Route, Routes } from "react-router-dom";
import { ApiTest } from "./components/common/ApiTest";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Tracker1 } from "./pages/Tracker1";
import { Tracker2 } from "./pages/Tracker2";

const Placeholder = ({ name }) => <h1 className="p-4">{name}</h1>;

export const Router = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Aqui las reemplazo por las páginas reales :D */}
        <Route index            element={<Tracker1 />} />  {/* → <DashboardPage /> */}
        <Route path="reports"   element={<Tracker2 />} />    {/* → <ReportsPage /> */}
        <Route path="apps"      element={<Placeholder name="cambiamos" />} />       {/* → <AppsPage /> */}
        <Route path="projects"  element={<Placeholder name="estas" />} />   {/* → <ProjectsPage /> */}
        <Route path="files"     element={<Placeholder name="vistas" />} />      {/* → <FilesPage /> */}
        <Route path="analytics" element={<Placeholder name="por las" />} />  {/* → <AnalyticsPage /> */}
        <Route path="world"     element={<Placeholder name="que van" />} />      {/* → <WorldPage /> */}
        <Route path="messages"  element={<Placeholder name="en el proyecto" />} />   {/* → <MessagesPage /> */}
      </Route>

      <Route path="/api-test" element={<ApiTest />} />
    </Routes>
  );
};
