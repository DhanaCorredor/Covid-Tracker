import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/common/ErrorBoundary";
import Sidebar from "../components/layout/Sidebar";

const DashboardLayout = () => {
  return (
    <ErrorBoundary>
      <div className="flex">
        <div>
          <Sidebar />
          {/* <DataSidebar/> */}
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default DashboardLayout;
