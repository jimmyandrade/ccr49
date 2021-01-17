import {graphql, useStaticQuery} from "gatsby";
import * as React from "react";
import Img from "gatsby-image";
import {Avatar} from "../Avatar";

export const ProfileAvatar = ({size, ...props}) => {


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
        <Avatar size={size}>
            {
                size === "large" ?
                    <Img {...props} fixed={data.large.childImageSharp.fixed} /> :
                    <Img {...props} fixed={data.standard.childImageSharp.fixed} />
            }
        </Avatar>
    );
}
