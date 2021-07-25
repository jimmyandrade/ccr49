import {
    Box,
    Divider,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import {ProfileAvatar} from "../ProfileAvatar";
import CakeIcon from "@material-ui/icons/Cake";
import {Avatar} from "../Avatar";
import {AllInclusive} from "@material-ui/icons";
import * as React from "react";

type Props = {
    fullName: string
};

export const ProfileContent : React.FunctionComponent<Props> = ({fullName}) => (
    <>
        <Typography component={"h1"} variant={"h4"}>
            <ProfileAvatar alt={`Imagem de perfil de ${fullName}`} size={"large"} /> {fullName}
        </Typography>
        <Typography component={"p"} gutterBottom={true} paragraph={true}>
            <CakeIcon fontSize={"small"} /> <time dateTime={"1997-11-20"}>20/11/1997</time> (<data>24</data> anos)
        </Typography>
        <Box pb={2}>
            <Divider />
        </Box>
        <Typography component={"h2"} variant={"h5"}>Conquistas de {fullName}</Typography>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar size={"medium"}>
                        <AllInclusive />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    disableTypography={true}
                    primary={<Typography component={"h3"} variant={"h6"}>Sabe-Tudo</Typography>}
                    secondary={<>
                        <Typography component={"p"} gutterBottom={true} variant={"body2"}>Ganhe <data>500</data> pontos</Typography>
                        <LinearProgress value={279/500*100} variant={"determinate"} />
                    </>} />
            </ListItem>
        </List>
    </>
);

