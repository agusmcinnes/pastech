"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Satellite, Gauge, Camera, Sparkles } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export function Solutions() {
  const t = useTranslations('solutions')
  const locale = useLocale()

  const solutions = [
    {
      id: "pasturometro",
      title: t('pasturometer.title'),
      description: t('pasturometer.description'),
      icon: Gauge,
    },
    {
      id: "satelital",
      title: t('satellite.title'),
      description: t('satellite.description'),
      icon: Satellite,
    },
    {
      id: "dron",
      title: t('drone.title'),
      description: t('drone.description'),
      icon: Camera,
    },
    {
      id: "inteligente",
      title: t('intelligent.title'),
      description: t('intelligent.description'),
      icon: Sparkles,
    },
  ]

  return (
    <section id="soluciones" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              href={`/${locale}/solutions/${solution.id}`}
              className="group relative bg-primary rounded-xl p-6 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer shadow-lg hover:shadow-xl"
            >
              <div className="flex-grow">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-white/80 text-sm mb-6">{solution.description}</p>
              </div>
              <span className="inline-flex items-center p-0 h-auto text-white group-hover:translate-x-1 transition-transform">
                {t('learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/#contacto`}>
            <Button
              size="lg"
              className="px-8 bg-[oklch(0.6_0.118_184.704)] hover:bg-[oklch(0.55_0.118_184.704)] text-white hover:scale-105 hover:shadow-lg hover:shadow-[oklch(0.6_0.118_184.704/0.25)] transition-all duration-300"
            >
              {t('contact')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
