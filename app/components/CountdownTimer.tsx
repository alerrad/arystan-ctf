"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date("2025-03-15T10:00:00") // Set this to your event date and time

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      setTimeLeft(newTimeLeft)
    }

    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4 text-green-500 font-mono text-2xl mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-black bg-opacity-50 rounded-lg p-3 mb-2">
            <span className="text-4xl font-bold">{value.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-sm uppercase">{unit}</span>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer

