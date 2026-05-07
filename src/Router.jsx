import { Route, Routes } from "react-router-dom";
import { ApiTest } from "./components/common/ApiTest";
import Tracker5 from "./components/layout/Tracker5";
import DashboardLayout from "./pages/DashboardLayout";

const Placeholder = ({ name }) => <h1 className="p-4">{name}</h1>;

export const Router = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Aqui las reemplazo por las páginas reales :D */}
        <Route index            element={<Placeholder name="Holi" />} />  {/* → <DashboardPage /> */}
        <Route path="reports"   element={<Placeholder name="Luego" />} />    {/* → <ReportsPage /> */}
        <Route path="apps"      element={<Placeholder name="cambiamos" />} />       {/* → <AppsPage /> */}
        <Route path="projects"  element={<Placeholder name="estas" />} />   {/* → <ProjectsPage /> */}
        <Route path="files"     element={<Placeholder name="vistas" />} />      {/* → <FilesPage /> */}
        <Route path="analytics" element={<Tracker5 />} />
        <Route path="world"     element={<Placeholder name="que van" />} />      {/* → <WorldPage /> */}
        <Route path="messages"  element={<Placeholder name="en el proyecto" />} />   {/* → <MessagesPage /> */}
      </Route>

      <Route path="/api-test" element={<ApiTest />} />
    </Routes>
  );
};
