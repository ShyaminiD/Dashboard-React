import Grid from "@mui/material/Grid";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import "./Dashboardcomponent1.css";
import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/material/Box";
import Linechart from "./Linechart";
import DoughnutChart from "./Doughnut";
import Illustrations from "./Illustrations";
import ProjectProgressBox from "./ProjectsProgress";
import ColorBoxesGrid from "./ColorBoxes";
import DevelopmentApproach from "./DevelopmentApproach";

import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

//Bar icon component in third box;-css in styles sheet
function Progress() {
  return (
    <div className="statprogress">
      <div className="statprogressbar"></div>
    </div>
  );
}
////Bar icon component in third box;-ENDS here
const statistics = [
  {
    id: "1",
    value1: "EARNINGS (MONTHLY)",
    value2: "$40,000",
    value3: "",
    value4: <CalendarTodayIcon />,
    themecolor: "blue",
  },
  {
    id: "2",
    value1: "EARNINGS (ANNUAL)",
    value2: "$215,000",
    value3: "",
    value4: <AttachMoneyIcon />,
    themecolor: "green",
  },
  {
    id: "3",
    value1: "TASKS",
    value2: "50%",
    value3: <Progress />,
    value4: <AssignmentIcon />,
    themecolor: "#36b9cc",
  },
  {
    id: "4",
    value1: "PENDING REQUESTS",
    value2: "18",
    value3: "",
    value4: <QuestionAnswerIcon />,
    themecolor: "orange",
  },
];
//Styling Grid with makeStyles
const useStyles = makeStyles({
  fourBoxContainer: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10px",
    borderLeft: "5px solid",
    borderColor: ({ tcolor }) => tcolor,
    fontSize: "10px",
  },
  headings: {
    color: ({ tcolor }) => tcolor,
    fontSize: "8px",
    fontWeight: "bold",
    marginBottom: "0px",
  },
  headingsData: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#4e4e52",
    marginBottom: "0px",
  },
  headingsBoxOuter: {
    padding: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingsBox: {
    display: "flex",
    flexDirection: "column",
  },
  headingsBoxv3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  headingsIcon: {
    color: "#dddfeb",
  },
});

export function Stats({ v1, v2, v3, v4, tcolor }) {
  console.log(v1);
  console.log(v2);
  console.log("color", tcolor);
  const classes = useStyles({ tcolor });

  return (
    <Grid xs={12} sm={5.8} lg={2.8} className={classes.fourBoxContainer}>
      <div className={classes.headingsBoxOuter}>
        <div className={classes.headingsBox}>
          <p className={classes.headings}>{v1}</p>
          <p className={classes.headingsData}>{v2}</p>
        </div>
        <div className={classes.headingsBoxv3}>{v3}</div>
        <div className={classes.headingsIcon}>{v4}</div>
      </div>
    </Grid>
  );
}
export function Dashboardcomponent1() {
  return (
    <div>
      <div style={{ margin: "10px",}}>
        <h4>Dashboard</h4>
      </div>

      <Grid container style={{ padding: "10px", gap: 20 }}>
        {statistics.map((v) => (
          <Stats
            v1={v.value1}
            v2={v.value2}
            v3={v.value3}
            v4={v.value4}
            tcolor={v.themecolor}
          />
        ))}
        <Linechart />
        <DoughnutChart />

        <ProjectProgressBox />
        <ColorBoxesGrid />

        <Illustrations />
        <DevelopmentApproach />
      </Grid>
      {/* //Grid Container   */}
    </div>
  );
}
