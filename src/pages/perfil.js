import * as React from "react";
import {Container, LinearProgress, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {Layout} from "../layout";
import {ProfileAvatar} from "../components/ProfileAvatar";
import {useSiteMetadata} from "../hooks/useSiteMetadata";
import {Avatar} from "../components/Avatar";
import {AllInclusive} from "@material-ui/icons";
import CakeIcon from '@material-ui/icons/Cake';

const ProfilePage = () => {

    const [fullName] = React.useState("Dandara");
    const { title: siteTitle } = useSiteMetadata();

    return (
        <Layout>
        <main>
            <Container>
                <Typography component={"h1"} variant={"h4"}>
                    <ProfileAvatar alt={`Imagem de perfil de ${siteTitle}`} size={"large"} /> {fullName} (<data>24</data> anos)
                </Typography>
                <Typography component={"p"} gutterBottom={true} paragraph={true}>
                    <CakeIcon fontSize={"small"} /> Data de nascimento: <time dateTime={"1997-11-20"}>20/11/1997</time>
                </Typography>
                <Typography component={"h2"} variant={"h5"}>Conquistas de {fullName}</Typography>
                <List>
                    <ListItem primary={"Sabe-Tudo"}>
                        <ListItemAvatar>
                            <Avatar>
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
            </Container>
        </main>
        </Layout>
    );
}

export default ProfilePage;