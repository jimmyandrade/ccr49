import {create} from "react-test-renderer";
import {Avatar} from "./index";

describe("<Avatar /> component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<Avatar />);
    expect(testRenderer).toMatchSnapshot();
  });
});
