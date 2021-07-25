import {BonusSection} from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  component: BonusSection,
  title: "Components/Bonus Section"
} as ComponentMeta<typeof BonusSection>;

const Template: ComponentStory<typeof BonusSection> = (args) => (
  <BonusSection title={args.title} />
);

export const Playground = Template.bind({});
Playground.args = {
  title: "Bonus Section Title"
};
Playground.storyName = "Bonus Section";
