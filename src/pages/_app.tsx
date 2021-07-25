import * as React from "react";
import * as PropTypes from "prop-types";
import type { AppProps } from "next/app";
import "../theme/fonts/stylesheet.css";
import Head from "next/head";
import {theme} from "../theme";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import { config } from "../config";
import {useRemoveServerSideStyles} from "../hooks/useRemoveServerSideStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {

    useRemoveServerSideStyles();

    return (
        <React.Fragment>
            <Head>
                <title key={"title"}>{config}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, minimum-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
}

export default MyApp;