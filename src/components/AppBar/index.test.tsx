import { create } from "react-test-renderer";
import {AppBar} from "./index";

jest.mock("next/image", () => "Image");

describe("<AppBar /> component", () => {
  it("should match snapshot", () => {
    const testRender = create(<AppBar title={"Test Title"} />);
    expect(testRender).toMatchSnapshot();
  });
});