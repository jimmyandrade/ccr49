import * as React from "react";
import {Container} from "@material-ui/core";
import {Layout} from "../layout";
import {ProfileContent} from "../components/ProfileContent";

const ProfilePage = () => {

    const [fullName] = React.useState("Dandara");

    return (
        <Layout>
            <main>
                <Container>
                    <ProfileContent fullName={fullName} />
                </Container>
            </main>
        </Layout>
    );
}

export default ProfilePage;