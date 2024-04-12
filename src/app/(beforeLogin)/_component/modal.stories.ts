import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/app/(beforeLogin)/_component/modal';

const meta = {
  title: 'Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;
export default meta;

type Story = StoryObj<typeof meta>;
export const modal: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    children: ``,
    title: '모달 타이틀입니다',
  },
};
