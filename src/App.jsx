import { ApiTest } from "./components/common/ApiTest";
import Sidebar from './components/layout/navsidebar/Sidebar'

function App() {
  return (
    <div className="app-layout">
      <main className="app-main">
      <Sidebar />
        <ApiTest />
      </main>
    </div>
  );
}

export default App;
