"use client"

import { useMemo } from "react"

type Snake = {
  d: string
  duration: number
  offset: number
}

function generatePath(): string {
  let x = Math.random() < 0.5 ? -300 : 1300
  let y = Math.random() * 1000

  const points = [`M ${x} ${y}`]
  const segments = Math.floor(Math.random() * 6) + 6

  for (let i = 0; i < segments; i++) {
    const horizontal = Math.random() > 0.5
    const distance = Math.random() * 300 + 150

    if (horizontal) {
      x += Math.random() > 0.5 ? distance : -distance
    } else {
      y += Math.random() > 0.5 ? distance : -distance
    }

    points.push(`L ${x} ${y}`)
  }

  return points.join(" ")
}

export function NeonSnakes() {
  const snakes = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => {
        const duration = Math.random() * 20 + 18
        return {
          d: generatePath(),
          duration,
          offset: Math.random() * duration * -1,
        }
      }),
    [],
  )

  return (
    <svg className="fixed inset-0 z-0 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <defs>
        <linearGradient id="snakeGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f2ff" stopOpacity="0" />
          <stop offset="45%" stopColor="#00f2ff" stopOpacity="0.25" />
          <stop offset="55%" stopColor="#00f2ff" stopOpacity="0.6" />
          <stop offset="65%" stopColor="#00f2ff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
        </linearGradient>

        <style>
          {`
            .snake {
              stroke-dasharray: 90 1200;
              animation-name: moveSnake;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            @keyframes moveSnake {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -1290; }
            }
          `}
        </style>
      </defs>

      {snakes.map((snake, i) => (
        <path
          key={i}
          d={snake.d}
          fill="none"
          stroke="url(#snakeGradient)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="snake"
          style={{
            animationDuration: `${snake.duration}s`,
            animationDelay: `${snake.offset}s`,
          }}
        />
      ))}
    </svg>
  )
}
