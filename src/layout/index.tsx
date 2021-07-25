import * as React from "react";
import {Box, CssBaseline, ThemeProvider} from "@material-ui/core";
import AppBar from "../components/AppBar";

import {useSiteMetadata} from "../hooks/useSiteMetadata";
import Footer from "../components/Footer";
import {theme} from "../theme";

export const Layout = ({children}) => {

  const { title } = useSiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box mb={4}>
        <AppBar title={title} />
      </Box>
      {children}
      <Box mt={2}>
        <Footer title={title} />
      </Box>
    </ThemeProvider>
  );
};