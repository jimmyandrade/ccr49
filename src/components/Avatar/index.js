import {Avatar as MaterialAvatar, makeStyles} from "@material-ui/core";
import * as React from "react";

export const Avatar = ({children, size, ...props}) => {

    const styles = {
        large: {
            height: 77,
            width: 77
        }
    };
    const useStyles = makeStyles(styles, { name: "ProfileAvatar" });

    const { large } = useStyles();

    return (
        <MaterialAvatar className={size === "large" ? large : ""}>
            {children}
        </MaterialAvatar>
    );


}