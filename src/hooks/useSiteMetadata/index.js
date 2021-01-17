import {graphql, useStaticQuery} from "gatsby";

export const useSiteMetadata = () => {
    const {site: {siteMetadata}} = useStaticQuery(
        graphql`
            query SEO {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return siteMetadata;
}