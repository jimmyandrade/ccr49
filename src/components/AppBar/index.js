import {
    AppBar as MaterialAppBar,
    Box,
    Button, Divider,
    Drawer,
    IconButton,
    Link,
    Toolbar,
    Typography
} from "@material-ui/core";
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