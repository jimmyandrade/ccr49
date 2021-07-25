import {Avatar as MaterialAvatar} from "@material-ui/core";
import * as React from "react";
import {useAvatarStyles} from "../../hooks/useAvatarStyles";

export type AvatarProps = {
  /**
   * @default medium
   */
  size?: "medium" | "large"
}

export const Avatar : React.FunctionComponent<Props> = (
  {
    children,
    size,
    ...props
  }) => {

  const { large } = useAvatarStyles();

  return (
    <MaterialAvatar
      className={size === "large" ? large : ""}
      {...props}
    >
      {children}
    </MaterialAvatar>
  );


};
