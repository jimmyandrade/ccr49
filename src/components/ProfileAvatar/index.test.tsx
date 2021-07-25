import {create} from "react-test-renderer";
import {ProfileAvatar} from "./index";

jest.mock("next/image", () => "Image");

describe("<ProfileAvatar /> component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ProfileAvatar alt={"Test Alt Text"} />);
    expect(testRenderer).toMatchSnapshot();
  });
});
