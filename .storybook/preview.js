import * as NextImage from "next/image";

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (alt, src, ...otherProps) => <img alt={alt} src={src} {...otherProps} />
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
