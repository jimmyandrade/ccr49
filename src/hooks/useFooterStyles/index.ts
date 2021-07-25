import {createStyles, makeStyles} from "@material-ui/core";

export const useFooterStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: "#252525",
      display: "block"
    }
  }),
  {name: "Footer"}
);
