import { Link } from 'react-aria-components'
import HeroImage from '../../assets/home/illustration-charts.svg?react'

import './style.css'

export const Hero = () => {
  return (
    <div className="hero center">
      <div className="hero-content">
        <h1>A simple solution to complex tasks is coming soon</h1>
        <p>Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>
        <Link href="#" className="btn btn-primary">Get Started</Link>
      </div>
      <div className="hero-image">
        <HeroImage viewBox='0 0 525 606' preserveAspectRatio='xMidYMin' />
      </div>
    </div>
  )
}
