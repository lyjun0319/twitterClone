import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import { Task } from "./Task";

const meta = {
    title:"Example/Task",
    component : Task,
    parameters : {
        layout : 'centered',
    },
    tags:['autodocs'],

} satisfies Meta<typeof Task>
export default meta;
type Story = StoryObj<typeof meta>;
export const Tasks: Story = {
    args:{
        task:{
            id:1,
            title:"아아아",
            state:"dk"
        },
    }
};

