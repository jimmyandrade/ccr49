import {ComponentMeta, ComponentStory} from "@storybook/react";
import Footer from "./index";

export default {
  component: Footer,
  title: "Components/Footer"
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer title={args.title} {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  title: "Website Title for Footer"
};
Playground.storyName = "Footer";
