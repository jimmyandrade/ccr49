import { create } from "react-test-renderer";
import {Logo} from "./index";

describe("<Logo /> component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<Logo alt={"Logo Alt Text"} />);
    expect(testRenderer).toMatchSnapshot();
  });
});