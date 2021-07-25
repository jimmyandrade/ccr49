import {create} from "react-test-renderer";
import NotFoundPage from "../pages/404";

jest.mock("next/image", () => "Image");

describe("404 error page", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<NotFoundPage />);
        expect(testRenderer).toMatchSnapshot();
    })
})