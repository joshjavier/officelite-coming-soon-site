import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button 2',
  }
}

export const Primary: Story = {
  args: {
    children: 'Button 1',
    color: 'primary',
  },
}

export const Light: Story = {
  args: {
    children: 'Button 3',
    color: 'light',
  },
}
