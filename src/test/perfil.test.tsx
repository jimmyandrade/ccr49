import {create} from "react-test-renderer";
import ProfilePage from "../pages/perfil";

jest.mock("next/image", () => "Image");

describe("Profile page", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<ProfilePage />);
        expect(testRenderer).toMatchSnapshot();
    })
})