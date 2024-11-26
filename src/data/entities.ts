export interface PricingPlan {
  name: string
  price: string | number
  description?: string
  features?: string[]
  ctaText?: string
  ctaLink?: string
}
