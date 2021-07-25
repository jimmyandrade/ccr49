import {AppBar} from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  component: AppBar,
  title: "Components/App Bar"
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => (
  <AppBar title={args.title} />
);

export const Playground = Template.bind({});
Playground.args = {};
Playground.storyName = "App Bar";
