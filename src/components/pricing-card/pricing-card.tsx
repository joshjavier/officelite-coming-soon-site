import { Link } from 'react-aria-components'
import type { PricingPlan } from '../../data/entities'

import './style.css'

interface Props {
  plan: PricingPlan
  featured?: boolean
}

export const PricingCard = ({ plan, featured = false }: Props) => {
  if (typeof plan.price === 'number') {
    plan.price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(plan.price)
  }

  return (
    <article className={['pricing-card', featured ? 'featured' : ''].join(' ')}>
      <h3>{plan.name}</h3>
      <p>{plan.price}</p>
      <p>{plan.description}</p>
      {plan.features && (
        <ul role='list'>
          {plan.features.map(feature =>
            <li key={crypto.randomUUID()}>{feature}</li>
          )}
        </ul>
      )}
      <Link
        className={['btn', featured ? 'btn-light' : ''].join(' ')}
        href={plan.ctaLink ?? '#'}
      >
        {plan.ctaText ?? 'Try for Free'}
      </Link>
    </article>
  )
}
