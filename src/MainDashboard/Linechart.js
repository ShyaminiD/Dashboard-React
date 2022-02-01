import { Line } from "react-chartjs-2";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import makeStyles from "@mui/styles/makeStyles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Earnings Overview",
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],
      backgroundColor: "blue",
      borderColor: "blue",
      lineTension: 0.3,
    },
  ],
};
const options = {
  title: {
    display: true,
    text: "Line CHart",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          max: 40000,
          min: 0,
          stepSize: 10000,
        },
      },
    ],
  },
};
const linechartContainer = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
};
const linechartHeader = {
  backgroundColor: "#f8f9fc",
  borderBottom: "1px solid #e3e6f0",
  marginBottom: "16px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
const chartHeaderName = {
  color: "#4e73df",
  fontWeight: "600",
  fontSize: "14px",
  padding: "10px",
  marginBottom: "0px",
};
const useStyles = makeStyles({
  chartIconbutton: {
    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
  },
  menuItemstyle: {
    color: "#3a3b45",
  },
  dropdownHeader: {
    color: "#b7b9cc",
    fontSize: "10px",
    fontWeight: "800",
  },
  earningsMenuDropDown: {
    color: "#3a3b45",
    lineHeight: "1.5",
    fontSize: "11px",
    fontWeight: "500",
  },
});
export default function Linechart() {
  const classes = useStyles();
  const [openMenu, setopenMenu] = useState(null);
  const handleMenuOpen = () => {
    setopenMenu(true);
  };
  const handleMenuClose = () => {
    setopenMenu(false);
  };

  return (
    <Grid lg={8} xs={12} style={linechartContainer}>
      <div lg={12} style={linechartHeader}>
        <p style={chartHeaderName}>Earnings Overview</p>

        <IconButton
          onClick={handleMenuOpen}
          className={classes.chartIconbutton}
          aria-label="settings"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu open={openMenu}>
          <MenuItem
            onClick={handleMenuClose}
            className={classes.dropdownHeader}
          >
            DROPDOWN HEADER:
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            className={classes.earningsMenuDropDown}
          >
            Action
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            className={classes.earningsMenuDropDown}
          >
            Another Action
          </MenuItem>
          <Divider />
          <MenuItem className={classes.earningsMenuDropDown}>
            Something else here
          </MenuItem>
        </Menu>
      </div>
      <Grid lg={12} style={{ padding: "20px" }}>
        <Line data={data} options={options} />
      </Grid>
    </Grid>
  );
}
