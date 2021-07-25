import * as React from "react";
import {Container} from "@material-ui/core";
import {ProfileContent} from "../components/ProfileContent";

const ProfilePage = () => {

  const [fullName] = React.useState("Dandara");

  return (

    <Container component={"main"}>
      <ProfileContent fullName={fullName} />
    </Container>
    
  );
};

export default ProfilePage;