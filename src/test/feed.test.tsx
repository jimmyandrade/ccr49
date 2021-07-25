import FeedPage from "../pages/feed";
import {create} from "react-test-renderer";

jest.mock("next/image", () => "Image");

describe("Feed page", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<FeedPage />);
        expect(testRenderer).toMatchSnapshot();
    })
})