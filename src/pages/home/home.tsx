import { Link } from 'react-aria-components'
import { Countdown } from '../../components/countdown'
import { Header } from '../../components/header'
import { Hero } from '../../components/hero'
import { PricingCard } from '../../components/pricing-card'
import { basicPack, proPack, ultimatePack } from '../../data/pricing'
import './style.css'

export const Home = () => {
  const launchDate = Date.now() + 4.089374e+9

  return (
    <div className='home'>
      <Header />
      <Hero />

      <div className="pricing switcher center">
        <PricingCard plan={basicPack} />
        <PricingCard plan={proPack} featured />
        <PricingCard plan={ultimatePack} />
      </div>

      <footer>
        <div className="center inner">
          <div className='launch-countdown'>
            <p>Coming <span>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(launchDate)}</span></p>
            <Countdown date={launchDate} color='dark' />
          </div>
          <Link className='btn btn-primary' href='#'>Get Started</Link>
        </div>
      </footer>
    </div>
  )
}
