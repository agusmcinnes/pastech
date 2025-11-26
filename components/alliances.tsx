"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Alliances() {
  const t = useTranslations('alliances')

  // Placeholder con logo de Pastech - reemplazar con logos reales
  const partners = [
    { name: "INTA", logo: "/logo.png" },
    { name: "Bayer Foundation", logo: "/logo.png" },
    { name: "Endeavor", logo: "/logo.png" },
    { name: "INIA Converge", logo: "/logo.png" },
    { name: "CREAlab", logo: "/logo.png" },
    { name: "INTI", logo: "/logo.png" },
    { name: "FAgro", logo: "/logo.png" },
    { name: "EEMAC", logo: "/logo.png" },
    { name: "UNMDP", logo: "/logo.png" },
    { name: "Banco Patagonia", logo: "/logo.png" },
    { name: "Seguros La Segunda", logo: "/logo.png" },
    { name: "Gentos", logo: "/logo.png" },
  ]

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('description')}
          </p>
        </div>
      </div>

      {/* Carrusel infinito */}
      <div className="relative">
        {/* Gradientes laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll">
          {/* Primera copia */}
          <div className="flex shrink-0 gap-12 px-6">
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center w-40 h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-[60px]"
                />
              </div>
            ))}
          </div>
          {/* Segunda copia para loop infinito */}
          <div className="flex shrink-0 gap-12 px-6">
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center w-40 h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
