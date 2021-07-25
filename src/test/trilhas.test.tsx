import { create } from "react-test-renderer";
import TracksPage from "../pages/trilhas";

jest.mock("next/image", () => "Image");

describe("Tracks page", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<TracksPage />);
        expect(testRenderer).toMatchSnapshot();
    })
})