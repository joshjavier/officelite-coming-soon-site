import type { Meta, StoryObj } from '@storybook/react'
import { Countdown } from './countdown'

const meta: Meta<typeof Countdown> = {
  component: Countdown,
  title: 'Countdown',
}

export default meta
type Story = StoryObj<typeof Countdown>

export const Default: Story = {}

export const Static: Story = {
  args: {
    value: 14,
  }
}
