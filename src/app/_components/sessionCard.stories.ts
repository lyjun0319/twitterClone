import type { Meta, StoryObj } from '@storybook/react';
import SessionCard from '@/app/_components/sessionCard';

const meta = {
  title: 'List/SessionCard',
  component: SessionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof SessionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardBox: Story = {
  args: {
    children: 'session card Box',
  },
};
