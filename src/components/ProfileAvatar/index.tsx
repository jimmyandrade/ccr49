import * as React from "react";
import Image, {ImageProps} from "next/image";
import {Avatar, AvatarProps} from "../Avatar";
import avatar from "../../images/avatar.jpeg";
import {useAvatarSize} from "../../hooks/useAvatarSize";

interface Props {
    alt: ImageProps["alt"];
    size?: AvatarProps["size"];
}

export const ProfileAvatar : React.FunctionComponent<Props> = (
  {
    alt,
    size,
    ...otherProps
  }
) => {

  const avatarSize = useAvatarSize(size);

  return (
    <Avatar size={size}>
      <Image alt={alt} height={avatarSize} src={avatar} width={avatarSize} {...otherProps} />
    </Avatar>
  );
};
