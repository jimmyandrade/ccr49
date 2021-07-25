import {createTheme} from "@material-ui/core";

export const theme = createTheme({
    overrides: {
        MuiCard: {
            root: {
                borderRadius: 0,
                borderTop: '11px solid #9e260e',
            }
        },
        MuiButton: {
            root: {
                borderRadius: 0,
                color: "#535353",
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 1,
                padding: "10px 25px",
                textDecoration: "none",
                textTransform: "uppercase",
                "&:focus, &:hover": {
                    backgroundColor: "#535353",
                    color: "#FFFFFF",
                    textDecoration: "none"
                }
            },
            outlined: {
                backgroundColor: "transparent",
                border: "1px solid #535353"
            }
        },
        MuiCardMedia: {
            root: {
                maxHeight: 400,
                overflow: "hidden"
            }
        },
        MuiCardContent: {
            root: {
                position: "relative"
            }
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: 0,
            }
        }
    },
    palette: {
        primary: {
            main: "#9e260e"
        }
    },
    typography: {
        fontFamily: "'Open Sans', Arial, Verdana, sans-serif",
        h1: {
            fontFamily: "DINNextLTPro-Black, 'Open Sans', Arial, Verdana, sans-serif"
        },
        h2: {
            fontFamily: "DINNextLTPro-Black, 'Open Sans', Arial, Verdana, sans-serif"
        },
        h3: {
            fontFamily: "DINNextLTPro-Black, 'Open Sans', Arial, Verdana, sans-serif"
        },
        h4: {
            fontFamily: "DINNextLTPro-Black, 'Open Sans', Arial, Verdana, sans-serif"
        },
        h5: {
            fontFamily: "DINNextLTPro-Black, 'Open Sans', Arial, Verdana, sans-serif"
        },
        h6: {
            fontFamily: "DINNextLTPro-Black, 'Open Sans', Arial, Verdana, sans-serif"
        }
    }
})