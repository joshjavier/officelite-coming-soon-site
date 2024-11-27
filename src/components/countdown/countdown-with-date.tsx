import { Countdown, Props } from './countdown'

import './style.css'

export const CountdownWithDate = ({ date, color }: Props) => {
  if (typeof date === 'string') {
    console.log('<CountdownWithDate> does not accept string `date` prop. Pass a number or Date instead.')
    return
  }

  return (
    <div className='countdown-with-date'>
      <p>Coming <span>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(date)}</span></p>
      <Countdown date={date} color={color} />
    </div>
  )
}
