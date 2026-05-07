import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/common/ErrorBoundary";
import Sidebar from "../components/layout/Sidebar";

export const DashboardLayout = () => {
  return (
    <ErrorBoundary>
      <div className="flex">
        <div className="flex">
          <Sidebar />
          {/* TODO: Reemplazar div por componente DataSidebar (Borrar antes de PR) */}
          <div className="bg-bg-landing-footer w-80"></div>
          {/* <DataSidebar/> */}
        </div>
        <main className="flex-1 p-lg">
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};
