import {useCallback, useState} from "react";

export const useToggle = (initialValue = false) => {

    const [open, setOpen] = useState<boolean>(initialValue);

    const toggle = useCallback(
        (open: boolean) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }

            setOpen(open);
        },
        []
    );

    return {
        open,
        toggle
    };

}