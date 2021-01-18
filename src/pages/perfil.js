import * as React from "react";
import {Container} from "@material-ui/core";
import {Layout} from "../layout";
import {useSiteMetadata} from "../hooks/useSiteMetadata";
import {ProfileContent} from "../components/ProfileContent";

const ProfilePage = () => {

    const [fullName] = React.useState("Dandara");
    const { title: siteTitle } = useSiteMetadata();

    return (
        <Layout>
        <main>
            <Container>
                <ProfileContent fullName={"Dandara"} />
            </Container>
        </main>
        </Layout>
    );
}

export default ProfilePage;