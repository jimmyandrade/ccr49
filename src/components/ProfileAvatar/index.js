import {Avatar} from "@material-ui/core";
import {Link as GatsbyLink} from "gatsby";
import * as React from "react";
import avatar from "../../images/avatar.jpeg";

export const ProfileAvatar = (props) => (
    <GatsbyLink to={"/perfil"}>
        <Avatar {...props} src={avatar} />
    </GatsbyLink>
);
