import { createStyles, makeStyles } from "@material-ui/core";

export const useAvatarStyles = makeStyles(
  createStyles({
    large: {
      height: 77,
      width: 77
    }
  }),
  { name: "ProfileAvatar" }
);
