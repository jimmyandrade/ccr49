import * as React from "react";
import {Box, Container, Link, makeStyles, Typography} from "@material-ui/core";

export const Footer = ({title}) => {

    const styles = {
        root: {
            backgroundColor: "#252525",
            display: "block"
        }
    };

    const useStyles = makeStyles(styles, {name: "Footer"});

    const { root } = useStyles();

    return (
        <Box className={root} color={"#ffffff"} component={"footer"}>
            <Box component={Container} pb={1} pt={2}>
                <Typography component={"p"} paragraph={true} variant={"caption"}>
                    <time dateTime={2021}>2021</time>
                    {" "}
                    <strong>{title}</strong>
                    {" "} - Valorize seu caminho
                    <br />
                    Crescimento. Evolução. Autonomia.
                </Typography>
                <Typography component={"p"} paragraph={true} variant={"caption"}>
                    <Link color={"inherit"} href={"#"} underline={"always"}>Política de privacidade</Link>
                    &nbsp;
                    <Link color={"inherit"} href={"#"} underline={"always"}>Proteção e uso de dados</Link>
                </Typography>
            </Box>
        </Box>
    );

}