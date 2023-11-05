import type { Meta, StoryObj } from '@storybook/react';

import Title, { TitleProps } from '@/components/table/Title';

const meta = {
	title: 'Custom/Table',
	component: Title,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<TitleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Name',
	},
};
