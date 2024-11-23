import { Button as AriaButton, ButtonProps } from 'react-aria-components'

import './style.css'

interface Props extends ButtonProps {
  color?: 'default' | 'primary' | 'light'
}

export const Button = ({ children, color = 'default' }: Props) => {
  let colorClass = ''
  if (color === 'primary') colorClass = 'btn-primary'
  if (color === 'light') colorClass = 'btn-light'

  return (
    <AriaButton
      className={['btn', colorClass].join(' ')}
    >
      {children}
    </AriaButton>
  )
}
