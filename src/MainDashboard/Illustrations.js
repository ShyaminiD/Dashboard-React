import Grid from "@mui/material/Grid";

const illustrationContainer = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
};
const illustrationHeader = {
  backgroundColor: "#f8f9fc",
  borderBottom: "1px solid #e3e6f0",
  marginBottom: "16px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
const illustrationName = {
  color: "#4e73df",
  fontWeight: "600",
  fontSize: "14px",
  padding: "10px",
  marginBottom: "0px",
};
const illustrationPara = {
  fontFamily: "Nunito",
  fontWeight: "400",
  fontSize: "14px",
  color: "#858796",
  padding: "10px",
  marginBottom: "0px",
};

const astyles = {
  padding: "10px",
  textDecoration: "none",
};
export default function Illustrations() {
  return (
    <Grid lg={5.65} xs={12} style={illustrationContainer}>
      <div lg={12} style={illustrationHeader}>
        <p style={illustrationName}>Earnings Overview</p>
      </div>

      <p style={illustrationPara}>
        Add some quality, svg illustrations to your project courtesy of
        <span>
          <a href="https://undraw.co/" target="_blank" rel="noreferrer" >
            unDraw
          </a>
        </span>
        a constantly updated collection of beautiful svg images that you can use
        completely free and without attribution!
      </p>
      <a href="https://undraw.co/" target="_blank" rel="noreferrer" style={astyles}>
        Browse Illustrations on unDraw →
      </a>
    </Grid>
  );
}
