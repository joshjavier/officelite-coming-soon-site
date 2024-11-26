import type { Meta, StoryObj } from '@storybook/react'
import { PricingCard } from './pricing-card'

const meta: Meta<typeof PricingCard> = {
  component: PricingCard,
  title: 'Components/PricingCard',
}

export default meta
type Story = StoryObj<typeof PricingCard>

export const Default: Story = {
  args: {
    plan: {
      name: 'Basic',
      price: 'Free',
      description: 'Up to 5 users for free',
      features: [
        'Basic document collaboration',
        '2 GB storage',
        'Great security and support',
      ],
    },
  },
}

export const Featured: Story = {
  args: {
    plan: {
      name: 'Pro',
      price: 9.99,
      description: 'Per user, billed monthly',
      features: [
        'All essential integrations',
        '50 GB storage',
        'More control and insights',
      ],
    },
    featured: true,
  },
}
