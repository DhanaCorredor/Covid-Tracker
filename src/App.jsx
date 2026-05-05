import { ApiTest } from "./components/common/ApiTest";
import Sidebar from "./components/layout/navsidebar/Sidebar";

function App() {
  return (
    <div>
      <main className="flex">
        <Sidebar />
        <ApiTest />
      </main>
    </div>
  );
}

export default App;
