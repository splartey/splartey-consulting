"use client"

import { useEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [51.5072, -0.1276], size: 0.18 },
    { location: [5.6037, -0.1870], size: 0.16 },
    { location: [52.5200, 13.4050], size: 0.15 },
    { location: [50.1109, 8.6821], size: 0.12 },
    { location: [-1.286389, 36.817223], size: 0.10 },
    { location: [0.347596, 32.582520], size: 0.08 },
    { location: [-6.792354, 39.208328], size: 0.08 },
    { location: [6.5244, 3.3792], size: 0.09 },
    { location: [9.0579, 7.4951], size: 0.07 },
    { location: [40.7128, -74.006], size: 0.08 },
    { location: [38.9072, -77.0369], size: 0.07 },
    { location: [25.2048, 55.2708], size: 0.07 },
    { location: [28.6139, 77.2090], size: 0.06 },
    { location: [39.9042, 116.4074], size: 0.05 },
    { location: [1.3521, 103.8198], size: 0.06 },
    { location: [14.5995, 120.9842], size: 0.05 },
    { location: [-23.5505, -46.6333], size: 0.06 },
    { location: [19.4326, -99.1332], size: 0.06 },
    { location: [-33.8688, 151.2093], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [55.7558, 37.6173], size: 0.05 },
    { location: [18.1096, -77.2975], size: 0.05 },
  ]
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
