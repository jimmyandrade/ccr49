import IndexPage from "../pages";
import {create} from "react-test-renderer";

jest.mock("next/image", () => "Image");

describe("Index page", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<IndexPage />);
        expect(testRenderer).toMatchSnapshot();
    })
})