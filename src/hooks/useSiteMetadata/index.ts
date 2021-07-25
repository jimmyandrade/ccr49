import {config} from "../../config";
import {useMemo} from "react";

export const useSiteMetadata = () => {

    return useMemo(
        () => config.siteMetadata,
        []
    );
}