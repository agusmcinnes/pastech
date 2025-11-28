"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Alliances() {
  const t = useTranslations('alliances')

  const partners = [
    { name: "INTA", logo: "/alianzas/logo-inta.png", invert: true },
    { name: "Bayer Foundation", logo: "/alianzas/bayer_logo_foundation_white.png", invert: true },
    { name: "Endeavor", logo: "/alianzas/endeavor.svg", invert: false },
    { name: "INIA Uruguay", logo: "/alianzas/INIA_URUGUAY azul.png", invert: false },
    { name: "CREAlab", logo: "/alianzas/contenidos-crea.svg", invert: false },
    { name: "INTI", logo: "/alianzas/logo-inti-v2.png", invert: true },
    { name: "FAgro", logo: "/alianzas/cropped-fagroudelar.png", invert: false },
    { name: "EEMAC", logo: "/alianzas/logo_eemac_header.png", invert: false },
    { name: "UNMDP", logo: "/alianzas/logoUNMDP.svg", invert: false },
    { name: "Banco Patagonia", logo: "/alianzas/Logo_Banco_Patagonia.svg.png", invert: false },
    { name: "La Segunda", logo: "/alianzas/logo-la-segunda.svg", invert: false },
    { name: "Gentos", logo: "/alianzas/logo-gentos.png", invert: false },
  ]

  const LogoItem = ({ partner, keyPrefix }: { partner: typeof partners[0], keyPrefix: string }) => (
    <div
      key={keyPrefix}
      className="flex items-center justify-center w-40 h-20 shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={120}
        height={60}
        className={`object-contain max-h-[60px] ${partner.invert ? 'invert' : ''}`}
      />
    </div>
  )

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('description')}
          </p>
        </div>
      </div>

      {/* Carrusel infinito */}
      <div className="relative group">
        {/* Gradientes laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-12 hover:[animation-play-state:paused]"
          style={{
            animation: 'scroll 40s linear infinite',
            width: 'max-content'
          }}
        >
          {/* Primera copia */}
          {partners.map((partner, index) => (
            <LogoItem key={`first-${index}`} partner={partner} keyPrefix={`first-${index}`} />
          ))}
          {/* Segunda copia para loop infinito */}
          {partners.map((partner, index) => (
            <LogoItem key={`second-${index}`} partner={partner} keyPrefix={`second-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
