import { CountdownWithDate } from '../../components/countdown'
import { Header } from '../../components/header'
import { SignupForm } from '../../components/sign-up-form'
import './style.css'

export const SignUp = () => {
  const launchDate = Date.now() + 4.089374e+9

  return (
    <div className='sign-up'>
      <Header />

      <main className='hero center'>
        <div className="left">
          <div className="hero-content">
            <h1>Work smarter. Save time.</h1>
            <p>Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>
          </div>
          <CountdownWithDate date={launchDate} />
        </div>
        <div className="right">
          <SignupForm />
        </div>
      </main>
    </div>
  )
}
