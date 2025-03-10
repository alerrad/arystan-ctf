"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nums = "0123456789"
    const alphabet = katakana + latin + nums

    const fontSize = 16
    const columns = canvas.width / fontSize

    const rainDrops: number[] = []

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1
    }

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)"
      context.fillRect(0, 0, canvas.width, canvas.height)

      context.fillStyle = "#0F0"
      context.font = fontSize + "px monospace"

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
    }

    const interval = setInterval(draw, 30)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export default MatrixBackground

