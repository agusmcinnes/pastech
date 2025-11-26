"use client"

import { useEffect, useState, useRef } from 'react'
import { useTranslations } from 'next-intl'

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, startCounting])

  return count
}

export function Stats() {
  const t = useTranslations('stats')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const hectares = useCountUp(50000, 3000, isVisible)
  const users = useCountUp(1200, 3000, isVisible)
  const efficiency = useCountUp(35, 3000, isVisible)
  const animals = useCountUp(85000, 3500, isVisible)

  const stats = [
    {
      value: `+${hectares.toLocaleString()}`,
      label: t('hectares'),
    },
    {
      value: `+${users.toLocaleString()}`,
      label: t('users'),
    },
    {
      value: `+${efficiency}%`,
      label: t('efficiency'),
    },
    {
      value: animals.toLocaleString(),
      label: t('animals'),
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.6_0.118_184.704)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
