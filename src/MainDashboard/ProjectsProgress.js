
import Grid from "@mui/material/Grid";

const progressbar = [
  {
    progressBarName: "Server Migration",
    progressBarColor: "#e74a3b",
    progressPercentage: "20%",
    percentageDisplay: "20%",
  },
  {
    progressBarName: "Sales Tracking",
    progressBarColor: "#f6c23e",
    progressPercentage: "40%",
    percentageDisplay: "40%",
  },
  {
    progressBarName: "Customer Database",
    progressBarColor: "#4e73df",
    progressPercentage: "60%",
    percentageDisplay: "60%",
  },

  {
    progressBarName: "Payout Details",
    progressBarColor: "#36b9cc",
    progressPercentage: "80%",
    percentageDisplay: "80%",
  },

  {
    progressBarName: "Account Setup",
    progressBarColor: "#1cc88a",
    progressPercentage: "100%",
    percentageDisplay: "Complete",
  },
];
const ProgressDiv = {
  width: "100%",
  backgroundColor: "#eaecf4",
  borderRadius: "5px",
  height: "12px",
  overflow: "hidden",
  marginBottom: "18px",
};

const progressName = {
  fontSize: "10px",
  fontFamily: "sans-serif",
  fontWeight: "600",
  color: "#858796",
  marginBottom: "5px",
};
const progressNameBox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
function ProjectProgress({
  progressbarname,
  progressbarcolor,
  progresspercentage,
  percentagedisplay,
}) {
  console.log(percentagedisplay);
  const progressDoneDiv = {
    height: "100%",
    width: `${progresspercentage}`,
    backgroundColor: progressbarcolor,
    borderRadius: "5px 0px 0px 5px",
    fontWeight: "600",
  };

  return (
    <Grid
      lg={12}
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <div style={progressNameBox}>
        <h4 style={progressName}>{progressbarname}</h4>
        <h4 style={progressName}>{percentagedisplay}</h4>
      </div>
      <div style={ProgressDiv}>
        <div style={progressDoneDiv}></div>
      </div>
    </Grid>
  );
}
const progressCardDiv = {
  backgroundColor: "#f8f9fc",
  borderBottom: "1px solid #e3e6f0",
  marginBottom: "16px",
};
const progressCard = {
  color: "#4e73df",
  fontWeight: "600",
  fontSize: "14px",
  padding: "10px",
  marginBottom: "0px",
};
const maincontainer = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
};
export default function ProjectProgressBox() {
  return (
    <Grid lg={6.5} xs={12} style={maincontainer}>
   
        <div lg={12} style={progressCardDiv}>
          <p style={progressCard}>Projects</p>
        </div>

        {progressbar.map((pb) => (
          <ProjectProgress
            progressbarname={pb.progressBarName}
            progressbarcolor={pb.progressBarColor}
            progresspercentage={pb.progressPercentage}
            percentagedisplay={pb.percentageDisplay}
          />
        ))}
      
    </Grid>
  );
}
