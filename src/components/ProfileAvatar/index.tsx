import * as React from "react";
import Image, {ImageProps} from "next/image";
import {Avatar} from "../Avatar";
import avatar from "../../images/avatar.jpeg";

interface Props {
    alt: ImageProps["alt"];
    size?: "large" | string;
}

export const ProfileAvatar : React.FunctionComponent<Props> = ({alt, size, ...otherProps}) => {

  const avatarSize = React.useMemo(
    () => size === "large" ? 77 : 40,
    [size]
  );

  return (
    <Avatar size={size}>
      <Image alt={alt} height={avatarSize} src={avatar} width={avatarSize} {...otherProps} />
    </Avatar>
  );
};
