import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/common/ErrorBoundary";
import { Sidebar } from "../components/layout/Sidebar";
import { SidebarData } from "../components/layout/dataSidebar/SidebarData";

export const DashboardLayout = () => {
  return (
    <ErrorBoundary>
      <div className="flex">
        <div className="flex">
          <Sidebar />
          <div className="hidden md:flex">
            <SidebarData />
          </div>
        </div>
        <main className="flex-1 min-w-0 p-lg">
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};
