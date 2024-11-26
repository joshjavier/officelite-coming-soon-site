import { Header } from '../../components/header'
import { Hero } from '../../components/hero'
import { PricingCard } from '../../components/pricing-card'
import { basicPack, proPack, ultimatePack } from '../../data/pricing'
import './style.css'

export const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />

      <div className="pricing switcher center">
        <PricingCard plan={basicPack} />
        <PricingCard plan={proPack} featured />
        <PricingCard plan={ultimatePack} />
      </div>

      {/* Coming */}
      {/* Countdown */}
      {/* Get Started */}
    </div>
  )
}
