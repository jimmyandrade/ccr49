import {useMemo} from "react";

export const useAvatarSize = (size) => useMemo(
  () => size === "large" ? 77 : 40,
  [size]
);
