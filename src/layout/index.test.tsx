import {create} from "react-test-renderer";
import {Layout} from "./index";

jest.mock("../components/AppBar", () => "AppBar");
jest.mock("../components/Footer", () => "Footer");

describe("<Layout /> component", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<Layout>Test children</Layout>);
        expect(testRenderer).toMatchSnapshot();
    })
});