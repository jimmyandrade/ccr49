import { act, renderHook } from "@testing-library/react-hooks";
import {useToggle} from "./index";

describe("Use Toggle hook", () => {
    describe("when initial value is not set", () => {
        it("should expose toggle function", () => {
            const { result } = renderHook(() => useToggle());
            expect(typeof result.current.toggle).toBe("function");
        })
        it("should be closed by default", () => {
            const { result } = renderHook(() => useToggle());
            expect(result.current.open).toBe(false);
        })
        it("should be closed when closed", () => {
            const { result } = renderHook(() => useToggle());

            act(() => {
                result.current.toggle(false);
            })

            expect(result.current.open).toBe(false);
        })
        it("should be open when opened", () => {
            const { result } = renderHook(() => useToggle());

            act(() => {
                result.current.toggle(true)({});
            })

            expect(result.current.open).toBe(true);

        })
    })
    describe("when initial value is closed", () => {
        it("should be closed by default", () => {
            const { result } = renderHook(() => useToggle(false));
            expect(result.current.open).toBe(false);
        })
        it("should remain closed when Tab key is pressed", () => {
            const { result } = renderHook(() => useToggle(false));

            act(() => {
                result.current.toggle(true)({ key: "Tab", type: "keydown" })
            });

            expect(result.current.open).toBe(false);

        })
        it("should remain closed when Shift key is pressed", () => {
            const { result } = renderHook(() => useToggle(false));

            act(() => {
                result.current.toggle(true)({ key: "Shift", type: "keydown" })
            });

            expect(result.current.open).toBe(false);
        })
    })
    describe("when initial value is open", () => {
        it("should be open by default", () => {
            const { result } = renderHook(() => useToggle(true));
            expect(result.current.open).toBe(true);
        })
    })
})