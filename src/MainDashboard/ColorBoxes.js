import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";

const colorforBoxes = [
  {
    colorName: "Primary",
    colorCode: "#4e73df",
    boxColor: "#4e73df",
  },
  {
    colorName: "Success",
    colorCode: "#1cc88a",
    boxColor: "#1cc88a",
  },
  {
    colorName: "Info",
    colorCode: "#36b9cc",
    boxColor: "#36b9cc",
  },
  {
    colorName: "Warning",
    colorCode: "#f6c23e",
    boxColor: "#f6c23e",
  },
  {
    colorName: "Danger",
    colorCode: "#e74a3b",
    boxColor: "#e74a3b",
  },

  {
    colorName: "Secondary",
    colorCode: "#858796",
    boxColor: "#858796",
  },
  {
    colorName: "Light",
    colorCode: "#f8f9fc",
    boxColor: "#f8f9fc",
    paracolorName: "grey",
  },

  {
    colorName: "Dark",
    colorCode: "#5a5c69",
    boxColor: "#5a5c69",
  },
];

const useStyles = makeStyles({
  colorboxStyles: {
    backgroundColor: ({ boxcolor }) => (console.log(boxcolor), boxcolor),
    borderRadius: "5px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  colornameStyle: {
    fontSize: "12px",
    fontFamily: "sans-serif",
    color: ({ paracolorname }) => paracolorname,
    marginBottom: "0px",
  },
  colorcodeStyle: {
    fontFamily: "sans-serif",
    fontSize: "10px",
    color: "#e5e4e4",
    marginBottom: "0px",
  },
});

const maincontainer = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
  padding: "10px",
};
function ColorBoxes({ colorname, colorcode, boxcolor, paracolorname }) {
  console.log(boxcolor);
  const classes = useStyles({ boxcolor, paracolorname });
  return (
    <Grid lg={5.5} xs={12}>
      <div className={classes.colorboxStyles}>
        <p className={classes.colornameStyle}>{colorname}</p>
        <p className={classes.colorcodeStyle}>{colorcode}</p>
      </div>
    </Grid>
  );
}

export function ColorBoxesGrid() {
  return (
    <Grid lg={6} xs={12} style={maincontainer}>
      {colorforBoxes.map((cb) => (
        <ColorBoxes
          colorname={cb.colorName}
          colorcode={cb.colorCode}
          boxcolor={cb.boxColor}
          paracolorname={cb.paracolorName}
        />
      ))}
    </Grid>
  );
}
