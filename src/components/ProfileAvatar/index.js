import {Avatar, makeStyles} from "@material-ui/core";
import {graphql, Link as GatsbyLink, useStaticQuery} from "gatsby";
import * as React from "react";
import Img from "gatsby-image";

export const ProfileAvatar = ({size, ...props}) => {

    const styles = {
        large: {
            height: 77,
            width: 77
        }
    };
    const useStyles = makeStyles(styles, { name: "ProfileAvatar" });

    const { large } = useStyles();

    const data = useStaticQuery(
        graphql`
query ProfileAvatarImageQuery {
  standard: file(relativePath: {eq: "avatar.jpeg"}) {
    childImageSharp {
      fixed(width: 40, height: 40) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  large: file(relativePath:{eq: "avatar.jpeg"}) {
    childImageSharp {
      fixed(width: 77, height: 77) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
        `
    );

    return (
        <Avatar className={size === "large" ? large : ""}>
            {
                size === "large" ?
                    <Img {...props} fixed={data.large.childImageSharp.fixed} /> :
                    <Img {...props} fixed={data.standard.childImageSharp.fixed} />
            }
        </Avatar>
    );
}
