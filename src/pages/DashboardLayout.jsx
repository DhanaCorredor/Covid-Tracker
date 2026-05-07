import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/common/ErrorBoundary";
import { Sidebar } from "../components/layout/Sidebar";

export const DashboardLayout = () => {
  return (
    <ErrorBoundary>
      <div className="flex">
        <div>
          <Sidebar />
          {/* <DataSidebar/> */}
        </div>
        <main className="flex-1 p-lg">
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};
