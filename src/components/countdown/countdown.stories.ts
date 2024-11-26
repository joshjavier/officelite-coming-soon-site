import type { Meta, StoryObj } from '@storybook/react'
import { Countdown } from './countdown'

const meta: Meta<typeof Countdown> = {
  component: Countdown,
  title: 'Components/Countdown',
}

export default meta
type Story = StoryObj<typeof Countdown>

export const Default: Story = {
  args: {
    date: Date.now() + 100000,
  }
}

export const Dark: Story = {
  args: {
    date: Date.now() + 100000,
    color: 'dark',
  }
}
