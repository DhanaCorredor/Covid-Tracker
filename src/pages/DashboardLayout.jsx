import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/common/ErrorBoundary";
import {Sidebar} from "../components/layout/navsidebar/Sidebar";
import { Dashboard } from "../components/layout/dataSidebar/Dashboard";

const DashboardLayout = () => {
  return (
    <ErrorBoundary>
      <div className="flex">
        <div className="flex">
          <Sidebar />
          <Dashboard/>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default DashboardLayout;
