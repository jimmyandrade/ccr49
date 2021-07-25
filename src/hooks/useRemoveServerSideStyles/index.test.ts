import { act, renderHook } from "@testing-library/react-hooks";
import {useRemoveServerSideStyles} from "./index";

describe("Remove server side styles hook", () => {

    it("should remove server side styles when not present", () => {

        const styleElement = document.createElement("style");
        styleElement.id = "jss-server-side";

        const headElements = document.getElementsByTagName("head");

        const firstHeadElement = headElements[0];
        firstHeadElement.appendChild(styleElement);

        expect(document.querySelector("#jss-server-side")).not.toBeUndefined();

        renderHook(() => useRemoveServerSideStyles());

        expect(document.querySelector("#jss-server-side")).toBeNull();
    })

    it("should query for #jss-server-side element", () => {
        const spyFunc = jest.fn();
        Object.defineProperty(global.document, "querySelector", { value: spyFunc });

        renderHook(() => useRemoveServerSideStyles());

        expect(spyFunc).toHaveBeenCalledWith("#jss-server-side");
        spyFunc.mockRestore();
    })

    it("should not remove server side styles when not present", () => {
        const spyFunc = jest.fn();
        Object.defineProperty(global.document, "removeChild", { value: spyFunc });

        renderHook(() => useRemoveServerSideStyles());

        expect(spyFunc).toHaveBeenCalledTimes(0);
        expect(document.querySelector("#jss-server-side")).toBeUndefined();
        spyFunc.mockRestore();
    })

})