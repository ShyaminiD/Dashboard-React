import { Navigationbar } from "./NavBar/Navigationbar";
import { Dashboardcomponent1 } from "./Dashboardcomponent1";

export default function MainDashboard() {
  const styles = { width: `calc(100% - 90px)`, overflow: "hidden" };
  return (
    <div className="second-Container" style={styles}>
      <Navigationbar />
      <Dashboardcomponent1 />
    </div>
  );
}
