import "./App.css";
import { Sidebar } from "./Sidebar/sideBarcomponents";
import { MainDashboard } from "./MainDashboard/MainDashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainDashboard />
    </div>
  );
}

export default App;
