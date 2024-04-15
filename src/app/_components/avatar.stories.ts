import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/app/_components/avatar';

const meta = {
  title: 'Page/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const avatar: Story = {
  args: {
    href: 'http://naver.com',
  },
};
