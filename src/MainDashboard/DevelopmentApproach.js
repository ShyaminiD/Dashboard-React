import Grid from "@mui/material/Grid";
const develomentContainer = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
};

const developmentHeader = {
  backgroundColor: "#f8f9fc",
  borderBottom: "1px solid #e3e6f0",
  marginBottom: "16px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const developmentPara = {
  fontFamily: "Nunito",
  fontWeight: "400",
  fontSize: "14px",
  color: "#858796",
  padding: "10px",
  marginBottom: "0px",
};

export default function DevelopmentApproach() {
  return (
    <Grid lg={5.65} xs={12} style={develomentContainer}>
      <div lg={12} style={developmentHeader}>
        <p style={developmentPara}>Development Approach</p>
      </div>
      <div lg={12}>
        <p style={developmentPara}>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
          to reduce CSS bloat and poor page performance. Custom CSS classes are
          used to create custom components and custom utility classes.
        </p>

        <p style={developmentPara}>
          Before working with this theme, you should become familiar with the
          Bootstrap framework, especially the utility classes.
        </p>
      </div>
    </Grid>
  );
}
