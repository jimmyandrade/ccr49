import { config } from "../../config";

export const useSiteMetadata = () => {

    const {siteMetadata} = config;

    return siteMetadata;
}