import { Link } from 'react-aria-components'
import { VisuallyHidden } from 'react-aria'
import { Header } from '../../components/header'
import { Hero } from '../../components/hero'
import { PricingCard } from '../../components/pricing-card'
import { basicPack, proPack, ultimatePack } from '../../data/pricing'
import { CountdownWithDate } from '../../components/countdown'

import './style.css'

export const Home = () => {
  const launchDate = Date.now() + 4.089374e+9

  return (
    <div className='home'>
      <Header />

      <main>
        <Hero />

        <div className="pricing switcher center">
          <VisuallyHidden elementType='h2'>Pricing</VisuallyHidden>
          <PricingCard plan={basicPack} />
          <PricingCard plan={proPack} featured />
          <PricingCard plan={ultimatePack} />
        </div>
      </main>

      <footer>
        <div className="center inner">
          <CountdownWithDate date={launchDate} color='dark' />
          <Link className='btn btn-primary' href='/sign-up'>Get Started</Link>
        </div>
      </footer>
    </div>
  )
}
