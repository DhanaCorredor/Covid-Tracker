 import {Sidebar}from './components/layout/navsidebar/Sidebar'
import { Dashboard } from './components/layout/dataSidebar/Dashboard'

function App() {
  return (
    <div className="app-layout flex min-h-screen">
      <Sidebar />
      <main className="app-main"></main>

      <div className='flex-1'><Dashboard/></div>
      
    </div>
    
      
  )
}

export default App;
