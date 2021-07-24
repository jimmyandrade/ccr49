import * as React from "react";
import {Box} from "@material-ui/core";
import {AppBar} from "../components/AppBar";

import {useSiteMetadata} from "../hooks/useSiteMetadata";
import {Footer} from "../components/Footer";

export const Layout = ({children}) => {

    const { title } = useSiteMetadata();

    return (
        <React.Fragment>
            <Box mb={4}>
                <AppBar title={title} />
            </Box>
            {children}
            <Box mt={2}>
                <Footer title={title} />
            </Box>
        </React.Fragment>
    );
}