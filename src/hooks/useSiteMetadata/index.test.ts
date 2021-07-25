import { renderHook } from "@testing-library/react-hooks";
import {useSiteMetadata} from "./index";

describe("Site metadata hook", () => {
  it("should return title", () => {
    const { result } = renderHook(() => useSiteMetadata());
    expect(result.current).toHaveProperty("title");
  });
});