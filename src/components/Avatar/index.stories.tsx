import {Avatar} from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  component: Avatar,
  title: "Components/Avatar"
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: "medium"
};

export const Large = Template.bind({});
Large.args = {
  size: "large"
};
