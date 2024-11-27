import React from 'react'
import NumberFlow from '@number-flow/react'

import './style.css'

interface Props {
  value?: number
  label?: string
  color?: 'light' | 'dark'
}

export const Segment = React.memo(({ value = 0, label, color = 'light' }: Props) => {
  // console.log(value)
  return (
    <div className='segment' data-theme={color === 'dark' ? 'dark' : undefined}>
      <NumberFlow value={value} format={{ minimumIntegerDigits: 2 }} />
      {label && <span>{label}</span>}
    </div>
  )
})

Segment.displayName = 'Segment'
