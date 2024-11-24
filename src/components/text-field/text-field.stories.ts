import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './text-field'

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Text Field',
    placeholder: 'Text Field',
  }
}

export const Filled: Story = {
  args: {
    label: 'Text Field',
    defaultValue: 'Text Field Filled',
  }
}

export const Error: Story = {
  args: {
    label: 'Text Field',
    isInvalid: true,
    defaultValue: 'Text Field Error',
  }
}
