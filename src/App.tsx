// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Button } from "./components/button"
import Header from "./components/header"

function App() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div>
        <h1>A simple solution to complex tasks is coming soon</h1>
        <p>Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>
        <Button color="primary">Get Started</Button>
      </div>

      {/* Pricing Cards */}
      <article>
        <h3>Basic</h3>

        <p>Free</p>
        <p>Up to 5 users for free</p>

        <ul>
          <li>Basic document collaboration</li>
          <li>2 gb storage</li>
          <li>Great security and support</li>
        </ul>

        <Button>Try for Free</Button>
      </article>

      <article>
        <h3>Pro</h3>

        <p>$9.99</p>
        <p>Per user, billed monthly</p>

        <ul>
          <li>All essential integrations</li>
          <li>50 gb storage</li>
          <li>More control and insights</li>
        </ul>

        <Button>Try for Free</Button>
      </article>

      <article>
        <h3>Ultimate</h3>

        <p>$19.99</p>
        <p>Per user, billed monthly</p>

        <ul>
          <li>Robust work management</li>
          <li>100 gb storage</li>
          <li>VIP support</li>
        </ul>

        <Button>Try for Free</Button>
      </article>

      {/* Footer */}
      {/* Countdown Timer */}
    </>
  )
}

export default App
