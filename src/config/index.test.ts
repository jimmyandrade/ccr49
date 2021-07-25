import {config} from "./index";

describe("Config", () => {
    describe("Site title", () => {
        it("should match snapshot", () => {
            expect(config.siteMetadata.title).toMatchInlineSnapshot(`"Jornada UOU"`);
        })
    })
})