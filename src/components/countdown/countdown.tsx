import { useEffect, useRef, useState } from 'react'
import './style.css'

interface Props {
  value?: number
}

export const Countdown = ({ value = 0 }: Props) => {
  const [number, setNumber] = useState<number>(value)
  const intervalId = useRef<number | null>(null)

  useEffect(() => {
    if (number === 0) {
      clearInterval(intervalId.current!)
      return
    }

    intervalId.current = window.setInterval(() => {
      setNumber(number - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId.current!)
    }
  }, [number])

  return (
    <div className="countdown">{String(number).padStart(2, '0')}</div>
  )
}
