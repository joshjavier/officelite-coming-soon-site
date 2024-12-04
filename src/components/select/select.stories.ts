import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './select'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    label: 'Options',
    items: [
      {
        id: 'basic',
        label: 'Basic Pack',
        description: 'Free',
      },
      {
        id: 'pro',
        label: 'Pro Pack',
        description: '$9.99',
      },
      {
        id: 'ultimate',
        label: 'Ultimate Pack',
        description: '$19.99',
      },
    ],
  },
}
