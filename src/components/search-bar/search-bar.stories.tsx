import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from './search-bar';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Main = Template.bind({});
Main.args = {
  value: "Test value",
  handleChange: () => console.log("change triggered"),
};