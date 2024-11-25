import {
  CountdownProps,
  CountdownRenderProps,
  default as ReactCountdown,
} from 'react-countdown'
import { Segment } from './segment'

import './style.css'

const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
  return (
    <>
      <Segment value={days} label='days' />
      <Segment value={hours} label='hours' />
      <Segment value={minutes} label='min' />
      <Segment value={seconds} label='sec' />
    </>
  )
}

interface Props extends CountdownProps {
  color: 'light' | 'dark'
}

export const Countdown = ({ date, color = 'light', ...props }: Props) => {
  return (
    <article
      className="countdown"
      data-theme={color === 'dark' ? 'dark' : undefined}
    >
      <ReactCountdown date={date} renderer={renderer} {...props} />
    </article>
  )
}
