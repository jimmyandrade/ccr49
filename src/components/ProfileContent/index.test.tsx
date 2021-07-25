import {create} from "react-test-renderer";
import {ProfileContent} from "./index";

jest.mock("next/image", () => "Image");

describe("<ProfileContent /> component", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<ProfileContent fullName={"Test Full Name"} />);
        expect(testRenderer).toMatchSnapshot();
    })
})