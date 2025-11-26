"use client"

import { useTranslations } from 'next-intl'

export function Team() {
  const t = useTranslations('team')

  return (
    <section id="equipo" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Placeholder para el equipo - agregar contenido más adelante */}
        <div className="mt-12 text-center text-muted-foreground">
          <p>{t('comingSoon')}</p>
        </div>
      </div>
    </section>
  )
}
