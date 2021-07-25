import {Logo} from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  component: Logo,
  title: "Components/Logo"
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
  <Logo alt={args.alt} {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  alt: "Logo alternative text"
};
Playground.storyName = "Logo";
