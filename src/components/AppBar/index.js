import {AppBar as MaterialAppBar, Box, Link, Toolbar, Typography} from "@material-ui/core";
import {Link as GatsbyLink} from "gatsby";
import * as React from "react";
import {Logo} from "../Logo";
import {ProfileAvatar} from "../ProfileAvatar";

export const AppBar = ({title}) => (
    <MaterialAppBar color={"default"} position={"static"}>
        <Toolbar>
            <Box flexGrow={1}>
                <Link component={GatsbyLink} to={"/"}>
                    <Typography component={"h1"} variant={"srOnly"}>{title}</Typography>
                    <Logo alt={`Logotipo de ${title}`}  />
                </Link>
            </Box>
            <GatsbyLink to={"/perfil"}>
                <ProfileAvatar alt={`Imagem de perfil de ${title}`} />
            </GatsbyLink>
        </Toolbar>
    </MaterialAppBar>
);