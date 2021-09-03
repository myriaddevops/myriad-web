import {ComponentStory, ComponentMeta} from '@storybook/react';

import React from 'react';

import {
  OutlinedButton,
  ButtonSize,
  ButtonColor,
  buttonSizes,
  buttonColors,
} from '../../src/components-v2/atoms/button';

export default {
  title: 'UI Revamp v2.0/atoms/Outlined Button',
  component: OutlinedButton,
  argTypes: {
    color: {
      options: [...buttonColors],
      control: {type: 'radio'},
    },
    size: {
      options: [...buttonSizes],
      control: {type: 'radio'},
    },
  },
} as ComponentMeta<typeof OutlinedButton>;

const Template: ComponentStory<typeof OutlinedButton> = args => <OutlinedButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: 'Disabled',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  color: ButtonColor.PRIMARY,
  size: ButtonSize.SMALL,
  children: 'Primary Small',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  color: ButtonColor.SECONDARY,
  size: ButtonSize.LARGE,
  children: 'Secondary Large',
};