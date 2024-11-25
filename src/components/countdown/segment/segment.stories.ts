import type { Meta, StoryObj } from '@storybook/react'
import { Segment } from './segment'

const meta: Meta<typeof Segment> = {
  component: Segment,
  title: 'Segment',
}

export default meta
type Story = StoryObj<typeof Segment>

export const Default: Story = {
  args: {
    value: 47,
    label: 'days'
  }
}

export const Dark: Story = {
  args: {
    value: 7,
    label: 'hours',
    color: 'dark',
  }
}

export const NoLabel: Story = {
  args: {
    value: 56,
  }
}

export const NoLabelDark: Story = {
  args: {
    value: 14,
    color: 'dark',
  }
}

export const NoValue: Story = {}
