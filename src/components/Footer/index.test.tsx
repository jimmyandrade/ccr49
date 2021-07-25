import { create } from "react-test-renderer";
import {Footer} from "./index";

describe("<Footer /> component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<Footer title={"Test Title"} />);
    expect(testRenderer).toMatchSnapshot();
  });
});