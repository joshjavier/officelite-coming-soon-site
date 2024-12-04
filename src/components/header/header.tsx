import { Link } from 'react-aria-components'
import logo from '../../assets/shared/logo.svg'

import './style.css'

export const Header = () => {
  return (
    <header className='center'>
      <Link href='/'><img src={logo} alt="officelite home" /></Link>
    </header>
  )
}
