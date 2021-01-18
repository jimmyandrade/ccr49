import {AppBar as MaterialAppBar, Box, Drawer, Link, Toolbar, Typography} from "@material-ui/core";
import {Link as GatsbyLink} from "gatsby";
import * as React from "react";
import {Logo} from "../Logo";
import {ProfileAvatar} from "../ProfileAvatar";
import {ProfileContent} from "../ProfileContent";

export const AppBar = ({title}) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    return (
        <MaterialAppBar color={"default"} position={"static"}>
            <Toolbar>
                <Box flexGrow={1}>
                    <Link component={GatsbyLink} to={"/"}>
                        <Typography component={"h1"} variant={"srOnly"}>{title}</Typography>
                        <Logo alt={`Logotipo de ${title}`}/>
                    </Link>
                </Box>
                <Link component={GatsbyLink} to={"/perfil"}>
                    <Box display={"flex"}>
                        <ProfileAvatar alt={`Imagem de perfil de ${title}`}/>
                    </Box>
                </Link>
            </Toolbar>
            <Drawer anchor={"right"} open={open} onClose={toggleDrawer(f)}>
                <ProfileContent fullName={"Dandara"} />
            </Drawer>
        </MaterialAppBar>
    );
}