import * as React from "react";
import {
    AppBar as MaterialAppBar,
    Box,
    Button, Divider,
    Drawer,
    IconButton,
    Link as MaterialLink,
    Toolbar,
    Typography
} from "@material-ui/core";
import Link from "next/link";
import {Logo} from "../Logo";
import {ProfileAvatar} from "../ProfileAvatar";
import {ProfileContent} from "../ProfileContent";
import {useToggle} from "../../hooks/useToggle";

export type AppBarProps = {
    title: string;
}

export const AppBar: React.FunctionComponent<AppBarProps> = ({title}) => {

    const {open, toggle: toggleDrawer} = useToggle();

    return (
        <MaterialAppBar color={"default"} position={"static"}>
            <Toolbar>
                <Box flexGrow={1}>
                    <Link href={"/"} passHref={true}>
                        <MaterialLink component={"a"}>
                            <Typography component={"h1"} variant={"srOnly"}>{title}</Typography>
                            <Logo alt={`Logotipo de ${title}`}/>
                        </MaterialLink>
                    </Link>
                </Box>
                <IconButton onClick={toggleDrawer(true)}>
                    <ProfileAvatar alt={`Imagem de perfil de ${title}`} />
                </IconButton>
            </Toolbar>
            <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
                <Box p={3}>
                    <ProfileContent fullName={"Dandara"} />
                    <Box pb={2}>
                        <Divider />
                    </Box>
                    <Button onClick={toggleDrawer(false)} variant={"outlined"}>Fechar</Button>
                </Box>
            </Drawer>
        </MaterialAppBar>
    );
}

export default AppBar;