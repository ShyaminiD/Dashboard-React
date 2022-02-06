import "./Sidebar.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";
import { Link } from "react-router-dom";
import MainDashboard from "../MainDashboard/MainDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const sideBarcomponents = [
  {
    title: "Components",
    icon: <SettingsIcon />,
    link: "/components",
    arrow: <ArrowForwardIosIcon />,
    subheading: "INTERFACE",
  },
  {
    title: "Utilities",
    icon: <BuildIcon />,
    link: "/utilties",
    arrow: <ArrowForwardIosIcon />,
    subheading: "",
  },
  {
    title: "Pages",
    icon: <FolderIcon n />,
    link: "/pages",
    arrow: <ArrowForwardIosIcon />,
    subheading: "ADDONS",
  },
  {
    title: "Charts",
    icon: <BarChartIcon />,
    link: "/charts",
    arrow: "",
    line: "<div class='line'></div>",
    subheading: "",
  },
  {
    title: "Tables",
    icon: <TableChartIcon />,
    link: "/tables",
    arrow: "",
    subheading: "",
  },
];

export function Sidebar() {
  const [setWidth, setWidthSidebar] = useState(180);
  const [setDisplay, setDisplayFlex] = useState("row");
  const sideBarStyles = {
    width: setWidth,
    backgroundColor: "#4e73df",
  };
  const sidebaremojiStyles = {
    display: "flex",
    flexDirection: setDisplay,
    paddingTop: "10px",
    paddingBottom: "10px",
    justifyContent: "space-evenly",
    borderBottom: "1px solid grey",
  };
  const sidebarSubmenu1 = {
    padding: "8px 8px 8px 0px",
    borderBottom: "1px solid grey",
  };
  const iconButtonStyle = {
    padding: "0px",
    color: "white",
    display: "flex",
    flexDirection: setDisplay,
    justifyContent: "flex-start",
  };
  const iconButtonStyle1 = {
    padding: "0px",
    color: "white",
    transform: "scale(0.6)",
    alignItems: "center",
    display: "flex",

    justifyContent: "center",
  };

  const iconButtonStyle2 = {
    color: "white",
    fontSize: "10px",
    fontWeight: "bold",
    padding: "0px",
  };
  const [openMenu, setopenMenu] = useState(false);
  console.log("openMenu value", openMenu);
  return (
    <Router>
      <div style={sideBarStyles}>
        <div style={{ margin: "10px" }}>
          <div style={sidebaremojiStyles}>
            <div className="arrow">
              <EmojiEmotionsIcon style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div
              className="arrow"
              style={{ color: "white", fontWeight: "bold", fontSize: "12px" }}
            >
              <p style={{ marginBottom: "0px" }}>
                SB ADMIN <sup>2</sup>
              </p>
            </div>
          </div>
          <Link to="/dashboard">
            <div style={sidebarSubmenu1}>
              <IconButton style={iconButtonStyle}>
                <div style={iconButtonStyle1}>
                  <SpeedIcon />
                </div>
                <div style={iconButtonStyle2}>Dashboard</div>
              </IconButton>
            </div>
          </Link>

          <div>
            <IconButton
              onClick={() => setopenMenu(true)}
              style={iconButtonStyle}
            >
              <div style={iconButtonStyle1}>
                <SpeedIcon />
              </div>
              <div style={iconButtonStyle2}>Components</div>

              <div>
                {openMenu === true ? (
                  <KeyboardArrowDownIcon
                    style={{ color: "#9f9fb4", transform: "scale(0.4)" }}
                  />
                ) : (
                  <ArrowForwardIosIcon
                    style={{ color: "#9f9fb4", transform: "scale(0.4)" }}
                  />
                )}
              </div>
            </IconButton>
            {openMenu === true ? (
              <Menu
                open={openMenu}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    padding: "3px",
                  }}
                >
                  {" "}
                  BASIC COMPONENTS
                </p>
                <MenuItem>Buttons</MenuItem>
                <MenuItem>Cards</MenuItem>
              </Menu>
            ) : (
              ""
            )}
          </div>

          <div className="navigating-arrow">
            <IconButton
              onClick={() => {
                console.log(setWidth);
                setWidth === 90 ? setWidthSidebar(180) : setWidthSidebar(90);
                setWidth === 90
                  ? setDisplayFlex("row")
                  : setDisplayFlex("column");
              }}
            >
              {setWidth === 180 ? (
                <ArrowBackIosIcon />
              ) : (
                <ArrowForwardIosIcon />
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/dashboard">
          <MainDashboard />
        </Route>
      </Switch>
    </Router>
  );
}
