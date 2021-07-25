import { useEffect } from "react";

export const useRemoveServerSideStyles = () => {
    useEffect(
        () => {
            const jssStyles: Element = document.querySelector("#jss-server-side");
            if(jssStyles) {
                jssStyles.parentElement.removeChild<Element>(jssStyles);
            }
        },
        []
    );
}