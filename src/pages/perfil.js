import * as React from "react";
import { parse } from "query-string";
import {Container, LinearProgress, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import {Layout} from "../layout";
import {ProfileAvatar} from "../components/ProfileAvatar";
import {useSiteMetadata} from "../hooks/useSiteMetadata";

const ProfilePage = () => {

    const [fullName, setFullName] = React.useState();
    const { title } = useSiteMetadata();

    React.useEffect(() => {

        const fullNameFromLocalStorage = window.localStorage.getItem("fullName");

        if(typeof fullNameFromLocalStorage !== "undefined") {
            setFullName(fullNameFromLocalStorage);
        }
    }, [])

    React.useEffect(() => {
        const fullNameFromUrl = parse(window.location.search);

        if(typeof fullNameFromUrl !== "undefined") {
            setFullName(fullNameFromUrl.fullName);
            window.localStorage.setItem("fullName", fullNameFromUrl.fullName);
        }
    }, [])

    return (
        <Layout>
        <main>
            <Container>
                <Typography component={"h1"} variant={"h4"}>
                    <ProfileAvatar alt={`Imagem de perfil de ${title}`} size={"large"} /> {fullName}
                </Typography>
                <Typography component={"h2"} variant={"h5"}>Conquistas</Typography>

                <List>
                    <ListItem primary={"Sabe-Tudo"}>
                        <ListItemText primary={"Sabe-Tudo"} secondary={<>Ganhe <data>500</data> pontos</>} />
                        <LinearProgress value={279/500*100} variant={"determinate"} />
                    </ListItem>
                </List>
            </Container>
        </main>
        </Layout>
    );
}

export default ProfilePage;