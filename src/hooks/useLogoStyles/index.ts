import {createStyles, makeStyles} from "@material-ui/core";

export const useLogoStyles = makeStyles(
  createStyles({
    root: {
      minHeight: 40,
      maxHeight: 70,
      minWidth: 70,
    },
    "svgClass1": { fill: "#b30000" },
    "svgClass2": { fill: "#3c3623" }
  }),
  { name: "Logo" }
);
