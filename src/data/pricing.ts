import type { PricingPlan } from './entities'

export const basicPack: PricingPlan = {
  name: 'Basic',
  price: 'Free',
  description: 'Up to 5 users for free',
  features: [
    'Basic document collaboration',
    '2 GB storage',
    'Great security and support',
  ],
  ctaLink: '/sign-up?plan=basic'
}

export const proPack: PricingPlan = {
  name: 'Pro',
  price: 9.99,
  description: 'Per user, billed monthly',
  features: [
    'All essential integrations',
    '50 GB storage',
    'More control and insights',
  ],
  ctaLink: '/sign-up?plan=pro'
}

export const ultimatePack: PricingPlan = {
  name: 'Ultimate',
  price: 19.99,
  description: 'Per user, billed monthly',
  features: [
    'Robust work management',
    '100 GB storage',
    'VIP support',
  ],
  ctaLink: '/sign-up?plan=ultimate'
}
