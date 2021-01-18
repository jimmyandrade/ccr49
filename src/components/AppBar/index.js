import {AppBar as MaterialAppBar, Box, IconButton, Link, Toolbar, Typography} from "@material-ui/core";
import {Link as GatsbyLink} from "gatsby";
import * as React from "react";
import {Logo} from "../Logo";
import {ProfileAvatar} from "../ProfileAvatar";
import {Notifications} from "@material-ui/icons";

export const AppBar = ({title}) => (
    <MaterialAppBar color={"default"} position={"static"}>
        <Toolbar>
            <Box flexGrow={1}>
                <Link component={GatsbyLink} to={"/"}>
                    <Typography component={"h1"} variant={"srOnly"}>{title}</Typography>
                    <Logo alt={`Logotipo de ${title}`}  />
                </Link>
            </Box>
            {/*<IconButton>*/}
            {/*    <Notifications />*/}
            {/*</IconButton>*/}
            <Link component={GatsbyLink} to={"/perfil"}>
                <Box display={"flex"}>
                    <ProfileAvatar alt={`Imagem de perfil de ${title}`} />
                </Box>
            </Link>
        </Toolbar>
    </MaterialAppBar>
);