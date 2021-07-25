import {theme} from "./index";

describe("Theme", () => {
    it("should match snapshot", () => {
        expect(theme).toMatchSnapshot();
    })
})