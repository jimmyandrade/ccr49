import {create} from "react-test-renderer";
import {BonusSection} from "./index";

jest.mock("next/image", () => "Image");

describe("<BonusSection /> component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BonusSection title={"Test title"} />);
    expect(testRenderer).toMatchSnapshot();
  });
});